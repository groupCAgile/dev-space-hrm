import { getDb } from "@/lib/database";

export async function GET(request: Request) {

    try {

        const db = await getDb();

        const leavesCollection = db.collection("leaves");
        const leaves = await leavesCollection.find({}).toArray();
        if (leaves && leaves.length > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: leaves }), {
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