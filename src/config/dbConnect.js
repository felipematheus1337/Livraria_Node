import mongoose from "mongoose";

mongoose.connect("mongodb+srv://felipe:123@cluster0.v8l0i.mongodb.net/praticar-nodejs");

let db = mongoose.connection;

export default db;