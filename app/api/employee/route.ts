import { getDb } from "@/lib/database";

export async function GET(request: Request) {

    try {

        const db = await getDb();

        const employeeCollection = db.collection("Employees");
        const employees = await employeeCollection.find({status:'active'}).toArray();
        if (employees && employees.length > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: employees }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: true, message: "No employees", data: [] }), {
                status: 200,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}