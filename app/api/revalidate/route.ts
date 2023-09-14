import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_WEBHOOK_SECRET 
    );

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(
        JSON.stringify({ message, isValidSignature, body }),
        { status: 401 }
      );
    }

    if (!body?._type) {
      const message = 'Bad Request';
      console.log(message);
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // Array of types to revalidate
    const validTypes = ['siteSettings', 'commercial-casting', 'home', 'casting','press'];

    // If the `_type` is within the validTypes array, trigger the revalidation
    if (validTypes.includes(body._type)) {
      await revalidateTag(body._type);

      setTimeout(async () => {
        try {
            await axios.post('ttps://api.vercel.com/v1/integrations/deploy/prj_I9EjBU6mDdDMHp78ibWka9iTF3wh/coK6sVflWZ');
            console.log('Redeploy triggered');
        } catch (err) {
            console.error('Error triggering redeploy:');
        }
    }, 35000); // Delay for 35 seconds
  
    }
  
    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    // Type guard for error message
    const errMsg = err instanceof Error ? err.message : 'An error occurred';
    return new Response(errMsg, { status: 500 });
  }
}


