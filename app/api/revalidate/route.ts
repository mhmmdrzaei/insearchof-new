import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

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

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    await revalidateTag(body._type);

    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    // Type guard for error message
    const errMsg = err instanceof Error ? err.message : 'An error occurred';
    return new Response(errMsg, { status: 500 });
  }
}
