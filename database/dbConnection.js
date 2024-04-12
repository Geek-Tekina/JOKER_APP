import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Joker_APP", // Change to "JOKER_APP" as per your database name
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, // Optionally, enable useCreateIndex to avoid deprecation warning
            // useFindAndModify: false // Optionally, disable useFindAndModify to avoid deprecation warning
        });
        console.log("Connected to database!");
    } catch (err) {
        console.error(`Some error occurred while connecting to database: ${err}`);
    }
};
