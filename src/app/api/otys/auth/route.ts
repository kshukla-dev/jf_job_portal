import { NextRequest, NextResponse } from 'next/server';
import { getAuthConfig } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const config = getAuthConfig();
        let key = config.authKey;

        try {
            const body = await request.json();
            if (body && body.key) {
                key = body.key;
            }
        } catch {
            // Body not provided or not JSON, use config key
        }

        const response = await fetch(config.authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: key || '' }),
        });

        const data = await response.json();

        return NextResponse.json(data, { status: response.status });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    return POST(request);
}
