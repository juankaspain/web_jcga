import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

interface ContactFormData {
  projectType: string
  timeline: string
  budget: string
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    const { projectType, name, email, message } = data

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('=== New Contact Form Submission ===')
    console.log('Project Type:', projectType)
    console.log('Timeline:', data.timeline)
    console.log('Budget:', data.budget)
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('==================================')

    // Send email via Resend if configured
    if (resend) {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'contact@jcga.dev',
        replyTo: email,
        subject: `New contact: ${projectType || 'General'} - ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><small>Sent from portfolio contact form at ${new Date().toISOString()}</small></p>
        `,
      })
      console.log('Email sent successfully via Resend')
    } else {
      console.warn('RESEND_API_KEY not configured. Email not sent. Set RESEND_API_KEY in .env.local to enable email sending.')
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
