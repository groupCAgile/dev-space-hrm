import { getDb } from "@/lib/database";

export async function GET(request: Request) {

    try {

        const db = await getDb();

        const { employeeId } = await request.json();
        const payrollCollection = db.collection("payroll");
        const payroll = await payrollCollection.find({ employee_id: employeeId }).toArray();
        if (payroll && payroll.length > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: payroll }), {
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

export async function POST(request: Request) {

    try {
        const db = await getDb();

        const data = await request.json();
        console.log(data);

        const result = await db.collection('payroll').insertOne(data!);
        console.log(result);
        return new Response(JSON.stringify({ success: true, message: "Successfully inserted" }), {
            status: 200,
        })

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}

export async function PUT(request: Request) {

    try {
        const db = await getDb();

        const { employeeId, data } = await request.json();

        const result = await db.collection('payroll').updateOne(
            {
                emp_id: employeeId
            },
            { $set: data }
        );

        if (result.modifiedCount > 0) {
            return new Response(JSON.stringify({ success: true, message: "Updated Successfully" }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: true, message: "Employee not found" }), {
                status: 404,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}