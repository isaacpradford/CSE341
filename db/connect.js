const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

let db;
const mongo_uri = process.env.MONGO_URI;

const initializeDb = (callback) => {
    if(db) {
        console.log('Db is already initialized.')
        return callback(null, _db);
    } 
    MongoClient.connect(mongo_uri)
        .then((client) => {
            db = client;
            callback(null, db);
        });
};

const getDb = () => {
    if(!db) {
        throw Error('DB not initialized.');
    }
    return db;
}

module.exports = { initializeDb, getDb }