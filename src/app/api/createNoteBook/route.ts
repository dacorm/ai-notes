import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { generateImagePrompt } from '@/shared/lib/openai';

export async function POST(req: Request) {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse('unauthorized', {
            status: 401,
        });
    }

    const body = await req.json();
    const { name } = body;
    const imageDescription = await generateImagePrompt(name);
    console.log(imageDescription);
    return new NextResponse('ok');
}
