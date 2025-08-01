import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Guardian Pathways <contact@guardianpathways.co.uk>',
      to: ['info@guardianpathways.co.uk'],
      subject: `[Website Contact] ${subject}`,
      html: `
        <strong>Name:</strong> ${name} <br />
        <strong>Email:</strong> ${email} <br />
        <strong>Subject:</strong> ${subject} <br />
        <strong>Message:</strong><br />
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
