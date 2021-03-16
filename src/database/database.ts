import Mongoose from "mongoose";
import dotenv from "dotenv";

let database: Mongoose.Connection;


export const connect = () => {
    dotenv.config();

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xselj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    if (database) {
        return;
    }
    
    Mongoose.connect( uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    database = Mongoose.connection;

    database.on("open", async () => {
        console.log('DB conbnected');
    });
    database.on("error", () => {
        console.log("Error connecting to DB")
    });

}

export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect;
}