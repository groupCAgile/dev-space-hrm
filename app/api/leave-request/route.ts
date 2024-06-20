import { getDb } from "@/lib/database";
import { revalidatePath } from "next/cache";

export async function GET(request: Request) {

    try {
        const db = await getDb();
        const url = new URL(request.url);
        const employeeId = url.searchParams.get("employeeId");

        const leavesCollection = db.collection("leave-requests");

        if (employeeId) {
            const leave = await leavesCollection.findOne({ employee_id: employeeId });

            if (leave) {
                return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: leave }), {
                    status: 200,
                });
            } else {
                return new Response(JSON.stringify({ success: true, message: "No notices", data: [] }), {
                    status: 200,
                });
            }
        } else {
            const leaves = await leavesCollection.find({ status: "Pending" }).toArray();

            if (leaves.length > 0) {
                return new Response(JSON.stringify({ success: true, message: "Successfully retrieved", data: leaves }), {
                    status: 200,
                });
            } else {
                return new Response(JSON.stringify({ success: true, message: "No notices", data: [] }), {
                    status: 200,
                });
            }
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
        });
    }
}

export async function PUT(request: Request) {

    try {
        const db = await getDb();

        const { employeeId } = await request.json();

        const result = await db.collection('leave-requests').updateOne({ employee_id: employeeId }, { $set: { status: "Approved" } });
        if (result.modifiedCount > 0) {
            revalidatePath('/home/leave-requests')
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
