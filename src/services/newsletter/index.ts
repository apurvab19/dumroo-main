import { supabase } from '../../lib/supabase';

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Insert subscription with retry logic
    let retries = 3;
    while (retries > 0) {
      try {
        const { error } = await supabase
          .from('newsletter_subscriptions')
          .insert({
            email,
            source: 'website_footer',
            metadata: {
              subscribed_from: window.location.pathname,
              timestamp: new Date().toISOString()
            }
          });

        if (!error) {
          return { success: true };
        }

        // If duplicate email, return specific message
        if (error.code === '23505') {
          return { 
            success: false, 
            error: 'This email is already subscribed to our newsletter.'
          };
        }

        throw error;
      } catch (err) {
        retries--;
        if (retries === 0) throw err;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    throw new Error('Failed to subscribe after retries');
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter'
    };
  }
}