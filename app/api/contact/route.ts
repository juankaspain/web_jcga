import { NextResponse } from 'next/server'

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

    // Log the submission (replace with email service in production)
    console.log('=== New Contact Form Submission ===')
    console.log('Project Type:', projectType)
    console.log('Timeline:', data.timeline)
    console.log('Budget:', data.budget)
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('==================================')

    // TODO: Add email sending service (e.g., Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@jcga.dev',
    //   to: 'juanca755@hotmail.com',
    //   subject: `New contact: ${projectType} - ${name}`,
    //   html: `<p>${message}</p>`,
    // })

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
