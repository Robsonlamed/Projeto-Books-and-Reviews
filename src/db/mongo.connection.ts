import { connect, connection } from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const mongoConnect = process.env.MONGO as string
const mongoConnectTest = process.env.MONGOTEST as string

export function connectMongo(isTest = false) {
    connection
        .once('error', (error) => {
            console.log('error connecting' + error)
        })
        .once('close', () => {
            console.log('no connection')
        }) 
        .once('open', () => {
            console.log('connected')
        })
        if(isTest === true){
            connect(mongoConnectTest)
        } else{
            connect(mongoConnect)
        }
}
        
export async function mongoDisconnect() {
    console.log("Closing MongoDB connection");
    connection.close();
}