import { getDb } from "@/lib/database";

export async function POST(request: Request) {

    try {
        const { username, password } = await request.json();
        const db = await getDb();

        const userCollection = db.collection("users");
        const user = await userCollection.findOne({ username, password });
        if (user) {
            return new Response(JSON.stringify({ success: true, message: "Login successful" }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), {
                status: 200,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}