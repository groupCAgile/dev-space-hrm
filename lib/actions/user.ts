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

export async function createNewEmployee(params: any) {
    const db = await getDb();
    try {

        const result = await db.collection('Employees').insertOne(params);

        return { success: true, message: "Successfully retrieved" }
    } catch (error) {
        return { success: false, message: "Server Error" }
    }
}

export async function getPayrollInfo(id: string) {
    const db = await getDb();

    const payrollCollection = db.collection("payroll");
    const payroll = await payrollCollection.find({ emp_id: id }, { projection: { _id: 0 } }).toArray();

    if (payroll) {
        return { success: true, message: "Successfully retrieved", data: payroll[0] }
    } else {
        return { success: true, message: "Invalid User", data: [] }
    }
}