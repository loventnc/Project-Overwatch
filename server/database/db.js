import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@projectoverwatch.429itzm.mongodb.net/`
    try {
        await mongoose.connect(URL, { useNewURLParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log("Connecting DB error",error);
    }
}

export default Connection;