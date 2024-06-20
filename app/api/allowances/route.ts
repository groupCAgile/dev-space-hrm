import { getDb } from "@/lib/database";

export async function POST(request: Request) {

    try {
        const db = await getDb();

        const { emp_id, allo_type, amount } = await request.json();

        const employeeCollection = db.collection("Employees");
        const employees = await employeeCollection.findOne({ employee_id: emp_id });

        if (employees) {
            const result = await db.collection('allowances').insertOne({ employee_id: emp_id, name: employees.first_name + " " + employees.last_name, allowType: allo_type, amount: amount });
            return new Response(JSON.stringify({ success: true, message: "Successfully inserted" }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: false, message: "No Employee" }), {
                status: 200,
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

        const employeeCollection = db.collection("allowances");
        const employees = await employeeCollection.find({}).toArray();
        if (employees && employees.length > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: employees }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: true, message: "No Allowances", data: [] }), {
                status: 200,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}
