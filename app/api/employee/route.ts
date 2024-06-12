import { getDb } from "@/lib/database";

export async function GET(request: Request) {

    try {

        const db = await getDb();

        const employeeCollection = db.collection("Employees");
        const employees = await employeeCollection.find({ status: 'active' }).toArray();
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

export async function POST(request: Request) {

    try {
        const db = await getDb();

        const data = await request.json();
        console.log(data);

        const result = await db.collection('Employees').insertOne(data!);
        console.log(result);
        return new Response(JSON.stringify({ success: true, message: "Successfully retrieved" }), {
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
        console.log(employeeId)
        console.log(data);

        const result = await db.collection('Employees').updateOne(
            {
                employee_id: employeeId
            },
            { $set: data }
        );
        console.log(result);
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

export async function DELETE(request: Request) {

    try {

        const db = await getDb();
        const { employeeId } = await request.json();

        const employeeCollection = db.collection("Employees");
        const employees = await employeeCollection.deleteOne({ employee_id: employeeId });
        if (employees && employees.deletedCount > 0) {
            return new Response(JSON.stringify({ success: true, message: "Successfully deleted", data: employees }), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ success: true, message: "No employee", data: [] }), {
                status: 200,
            })
        }

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        })
    }
}