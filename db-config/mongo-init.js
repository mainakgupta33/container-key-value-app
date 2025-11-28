const keyValueDb = process.env.KEY_VALUE_DB;
const keyValueUser = process.env.KEY_VALUE_USER;
const keyValuePassword = process.env.KEY_VALUE_PASSWORD;

// Corrected method name: getSiblingDB
db = db.getSiblingDB(keyValueDb);

db.createUser(
    {
        user : keyValueUser,
        pwd : keyValuePassword,
        roles:[
            {
                role: 'readWrite',
                // Use the variable for the database name
                db : keyValueDb 
            }
        ]
    }
);