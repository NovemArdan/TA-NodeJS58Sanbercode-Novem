// database.ts
// import mongoose from 'mongoose';

// const DATABASE_URL = "mongodb+srv://novemrohmadin4:novemrohmadin4@belajar-backend-nodejs.rc0fnwi.mongodb.net/?retryWrites=true&w=majority&appName=belajar-backend-nodejs";

// const connect = async () => {
//     try {
//       await mongoose.connect(DATABASE_URL);
//       console.log("Database connected");
//     } catch (error) {
//       console.error("Error connecting to database:", error);
//     }
// };

// export default connect;

import mongoose from 'mongoose';

const DATABASE_URL = "mongodb+srv://novemrohmadin4:novemrohmadin4@belajar-backend-nodejs.rc0fnwi.mongodb.net/?retryWrites=true&w=majority&appName=belajar-backend-nodejs";

const connect = async () => {
    try {
      await mongoose.connect(DATABASE_URL, {
          autoIndex: true,
          dbName: "test",  // Replace "nama db" with the actual name of your database
          connectTimeoutMS: 10000
      });
      console.log("Database connected");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
};

export default connect;

