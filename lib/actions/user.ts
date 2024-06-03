import { getDb } from "../database";

export async function getUserInfo(params?: any) {
    const db = await getDb();

    const employeeCollection = db.collection("Employees");
    const employee = await employeeCollection.find({ employee_id: 'E123' }, { projection: { _id: 0 } }).toArray();

    if (employee) {
        return { success: true, message: "Successfully retrieved", data: employee[0] }
    } else {
        return { success: true, message: "Invalid User", data: [] }
    }
}