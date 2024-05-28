import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URL!;
const options = { serverApi: ServerApiVersion.v1 };

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export const getDb = async (dbName: string = 'hrm_db') => {
    const client = await clientPromise;
    return client.db(dbName);
};
