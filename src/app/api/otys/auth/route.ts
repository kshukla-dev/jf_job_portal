import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        let key = process.env.OTYS_API_KEY;

        try {
            const body = await request.json();
            if (body && body.key) {
                key = body.key;
            }
        } catch {
            // Body not provided or not JSON, use env key
        }

        const baseUrl = process.env.OTYS_API_BASE_URL || '';
        const authUrl = `${baseUrl.replace(/\/+$/, '')}/auth`;

        const response = await fetch(authUrl, {
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
