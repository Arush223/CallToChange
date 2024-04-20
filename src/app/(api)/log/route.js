import { updateCalls } from "../../../../scripts/mongo/mongo_scripts"

export const dynamic = 'force-dynamic'
export async function POST(request) {
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')
    try {
        updateCalls(email)
        return Response.json({message: 'Congratulations'}, {status: 200})
    } catch (error) {
        console.error(error)
        return Response.json({error: 'Issue updating data'}, {status: 400})
    }
}