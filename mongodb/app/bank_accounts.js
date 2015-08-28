/**
 * Drop current collection
 */

db.bank_accounts.drop();

/**
 * Collection of bank accounts
 */

db.bank_accounts.insert([
    {
        "_id" : 1,
        "bank" : "Banco do Brasil",
        "thumbnail" : ""
    },
    {
        "_id" : 2,
        "bank" : "Caixa Economica Federal",
        "thumbnail" : ""
    },
    {
        "_id" : 3,
        "bank" : "Citibank",
        "thumbnail" : ""
    },
    {
        "_id" : 4,
        "bank" : "Itau",
        "thumbnail" : ""
    },
    {
        "_id" : 5,
        "bank" : "Santander",
        "thumbnail" : ""
    },
    {
        "_id" : 6,
        "bank" : "Bradesco",
        "thumbnail" : ""
    },
    {
        "_id" : 7,
        "bank" : "HSBC",
        "thumbnail" : ""
    }
]);
