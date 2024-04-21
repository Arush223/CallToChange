import { updateTextGenerationCalls } from "../../../../scripts/mongo/mongo";

export const dynamic = "force-dynamic";
export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const email = searchParams.get("email");
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(email)) {
      throw new Error("Invalid email input");
    }

    updateTextGenerationCalls(email);
    
    return Response.json({ message: "Successfully logged" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
