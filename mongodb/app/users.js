/**
 * Initial users collection
 */

db.users.insert({
    "_id" : 0,
    "email" : "",
    "token" : ""
});

/**
 * Create users index
 */

db.users.createIndex( { "email" : 1 } );
db.users.createIndex( { "token" : 1 } );
