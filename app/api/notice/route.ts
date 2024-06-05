import { getDb } from "@/lib/database";

export async function POST(request: Request) {

    try {
        const db = await getDb();

        const data = await request.json();

        const result = await db.collection('notices').insertOne(data);
        if (result.insertedId) {
            return new Response(JSON.stringify({ success: true, message: "Successfully inserted" }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: false, message: "Could not add notice" }), {
                status: 404,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}