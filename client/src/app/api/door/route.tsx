import { NextRequest, NextResponse } from 'next/server';

let doorState = { isDoorOpen: false };

export async function POST(request: NextRequest) {
  const { pin, action } = await request.json();

  const correctPin = '1234';
  if (action === 'open') {
    if (pin === correctPin) {
      doorState.isDoorOpen = true;
      return NextResponse.json(doorState, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Incorrect PIN' }, { status: 401 });
    }
  } else if (action === 'close') {
    doorState.isDoorOpen = false;
    return NextResponse.json(doorState, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid Action' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(doorState, { status: 200 });
}
