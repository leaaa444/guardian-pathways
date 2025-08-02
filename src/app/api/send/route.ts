
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
// Assuming you create this email template component
import ContactFormEmail  from '../../components/emails/ContactFormEmail'
// Initialize Resend with your API key from environment variables
// Make sure you have RESEND_API_KEY in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// This is the main function that handles the POST request
export async function POST(request: Request) {
    try {
        // 1. Parse the form data from the request body
        const { name, email, subject, message } = await request.json();

        // 2. Basic validation to ensure all fields are present
        if (!name || !email || !subject || !message) {
             return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 3. Send the email using Resend
        const { data, error } = await resend.emails.send({
            // IMPORTANT: This "from" address must be a verified domain on your Resend account.
            // For testing, Resend lets you use "onboarding@resend.dev", but for production,
            // you must use something like "noreply@guardianpathways.co.uk".
            from: 'Contact Form <onboarding@resend.dev>',
            
            // This is the email address that will receive the form submissions.
            to: ['info@guardianpathways.co.uk'],
            
            // The subject line of the email you will receive.
            subject: `New Message from ${name}: ${subject}`,
            
            // The sender's email address, so you can reply directly to them.
            replyTo: email,

            // This is your React component for the email body.
            // We pass the form data as props to the component.
            react: ContactFormEmail({ name, email, subject, message }),
        });

        // 4. Handle any errors from the Resend API
        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
        }

        // 5. If successful, return a success response
        return NextResponse.json({ message: 'Email sent successfully!', data });

    } catch (error) {
        // Handle any other unexpected errors
        console.error("Server Error:", error);
        return NextResponse.json({ message: 'An unexpected error occurred.', error }, { status: 500 });
    }
}
