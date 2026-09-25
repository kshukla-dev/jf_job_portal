import { NextRequest, NextResponse } from 'next/server';
import {
  getJobAlertFormDefinition,
  submitJobAlertSubscription,
  buildJobAlertPayload,
  JobAlertField,
  OtysJobAlertSubmitPayload,
} from '@/lib/api';

export const dynamic = 'force-dynamic';

/**
 * GET /api/otys/job-alert
 * Server-authenticated endpoint to retrieve the dynamic Job Alert form definition.
 */
export async function GET() {
  try {
    const formDefinition = await getJobAlertFormDefinition();

    return NextResponse.json(
      {
        success: true,
        data: formDefinition,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('[OTYS Job Alert Form API Error]:', errorMsg);

    return NextResponse.json(
      {
        success: false,
        error: "We couldn't load the job alert form right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/otys/job-alert
 * Server-authenticated endpoint to submit the Job Alert form.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    let payload: OtysJobAlertSubmitPayload;

    if (body.fields && body.formValues) {
      payload = buildJobAlertPayload(
        body.fields as JobAlertField[],
        body.formValues as Record<string, unknown>
      );
    } else if (body.answers) {
      payload = {
        answers: body.answers,
      };
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request payload: answers or formValues are required.',
        },
        { status: 400 }
      );
    }

    // Attach optional metadata if available
    const referer = request.headers.get('referer');
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (referer || forwardedFor) {
      payload.metaData = {
        referer: referer || null,
        ip: forwardedFor ? forwardedFor.split(',')[0].trim() : undefined,
      };
    }

    const result = await submitJobAlertSubscription(payload);

    return NextResponse.json(
      {
        success: true,
        message: 'Your job alert subscription has been created successfully.',
        data: result.data,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('[OTYS Job Alert Submission Error]:', errorMsg);

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to subscribe to job alerts. Please verify your entries and try again.',
      },
      { status: 500 }
    );
  }
}
