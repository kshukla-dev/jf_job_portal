import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const jobId = formData.get('jobId') as string | null;
    const jobTitle = formData.get('jobTitle') as string | null;
    const firstName = formData.get('firstName') as string | null;
    const lastName = formData.get('lastName') as string | null;
    const phone = formData.get('phone') as string | null;
    const email = formData.get('email') as string | null;
    const cv = formData.get('cv') as File | null;

    if (!firstName || !firstName.trim()) {
      return NextResponse.json(
        { error: 'First name is required.' },
        { status: 400 }
      );
    }

    if (!lastName || !lastName.trim()) {
      return NextResponse.json(
        { error: 'Last name is required.' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: 'Phone number is required.' },
        { status: 400 }
      );
    }
    const cleanPhoneDigits = phone.replace(/\D/g, '');
    if (cleanPhoneDigits.length < 7) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number (at least 7 digits).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.trim() || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!cv || !(cv instanceof File) || cv.size === 0) {
      return NextResponse.json(
        { error: 'CV is mandatory. Please upload your CV (.pdf, .doc, .docx).' },
        { status: 400 }
      );
    }

    console.log('[Job Application Received]:', {
      jobId,
      jobTitle,
      candidate: `${firstName} ${lastName}`,
      email,
      phone,
      hasCv: !!cv,
      cvFileName: cv?.name,
      cvFileSize: cv?.size,
      timestamp: new Date().toISOString(),
    });

    // TODO: Connect directly to OTYS Candidate/Application API if needed
    // You can forward candidate details & cv file to OTYS WebAPI here

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      data: {
        jobId,
        firstName,
        lastName,
        email,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
