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

export async function GET(request: Request) {

    try {

        const db = await getDb();

        const noticesCollection = db.collection("notices");
        const notices = await noticesCollection.find({}).toArray();
        if (notices && notices.length > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: notices }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: true, message: "No notices", data: [] }), {
                status: 200,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}