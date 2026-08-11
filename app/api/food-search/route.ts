import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (!query) {
    return NextResponse.json({ foods: [] });
  }

  const apiKey = process.env.USDA_FDC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "USDA_FDC_API_KEY is not configured" },
      { status: 500 },
    );
  }

  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(
    query,
  )}&pageSize=15&dataType=Survey%20(FNDDS),Foundation,SR%20Legacy&api_key=${apiKey}`;

  const maxRetries = 5;
  const retryDelay = 500; // ms

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }

      // If not ok and we have retries left, wait and retry
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        continue;
      }

      // Final attempt failed
      return NextResponse.json(
        { error: "Failed to fetch from USDA" },
        { status: res.status },
      );
    } catch {
      // Network error - retry if attempts left
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        continue;
      }

      return NextResponse.json(
        { error: "Failed to fetch food data" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json(
    { error: "Failed to fetch food data" },
    { status: 500 },
  );
}
