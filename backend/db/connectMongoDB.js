import mongoose, { connect } from "mongoose";

const connectMongoDB = async (req,res) => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDb connected : ${conn.connection.host}`);

    }
    catch (error) {
        console.error(`Error connection to MongoDB : ${error.message}`) ;
        process.exit(1);

    }
}

export default connectMongoDB;