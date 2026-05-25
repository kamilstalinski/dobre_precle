import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const TAG = "contentful";

const checkSecret = (request: NextRequest): boolean => {
  const expected = process.env.CONTENTFUL_REVALIDATE_SECRET;
  if (!expected) return false;

  const fromQuery = request.nextUrl.searchParams.get("secret");
  const fromHeader = request.headers.get("x-revalidate-secret");
  return fromQuery === expected || fromHeader === expected;
};

export async function POST(request: NextRequest) {
  if (!checkSecret(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(TAG);

  return NextResponse.json({
    ok: true,
    revalidated: TAG,
    now: Date.now(),
  });
}

// Wygodne dla ręcznego testu z przeglądarki: GET też działa, ale również wymaga sekretu.
export async function GET(request: NextRequest) {
  if (!checkSecret(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(TAG);

  return NextResponse.json({
    ok: true,
    revalidated: TAG,
    now: Date.now(),
  });
}
