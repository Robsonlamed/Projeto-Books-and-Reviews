import "./seeder/seeder";
import { seeder } from "./seeder/seeder";
import { connectMongo, mongoDisconnect } from "./mongo.connection";

(async () => {
    connectMongo()
    await seeder()
    mongoDisconnect()
})() 
