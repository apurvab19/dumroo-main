import { supabase } from '../../lib/supabase';

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    // Validate required fields
    if (!data.name.trim() || !data.subject.trim() || !data.message.trim()) {
      throw new Error('Please fill in all required fields');
    }

    // Submit form with retry logic
    let retries = 3;
    while (retries > 0) {
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .insert({
            ...data,
            metadata: {
              user_agent: navigator.userAgent,
              submitted_from: window.location.pathname,
              timestamp: new Date().toISOString()
            }
          });

        if (!error) {
          return { success: true };
        }

        throw error;
      } catch (err) {
        retries--;
        if (retries === 0) throw err;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    throw new Error('Failed to submit form after retries');
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit contact form'
    };
  }
}