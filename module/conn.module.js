const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://chunkyfullthrottle:Pi%4031415@aiproffcontact.av1oibw.mongodb.net/contactusDB?retryWrites=true&w=majority';
// const mongoDB = 'mongodb+srv://doadmin:3taI26vYAM8y9415@dbaas-db-2840143-36631677.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=dbaas-db-2840143'


async function connectToDatabase() {
try {
    await mongoose.connect(mongoDB);
    console.log("DB is connected to the server");
} catch (error) {
    console.error("Error connecting to the database:", error);
}
}

module.exports = connectToDatabase;