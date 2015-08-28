/**
 * Drop current collection
 */

db.credit_cards.drop();

/**
 * Collection of bank accounts
 */

db.credit_cards.insert([
    {
        "_id" : 1,
        "credit_card" : "Visa",
        "thumbnail" : ""
    },
    {
        "_id" : 2,
        "credit_card" : "MasterCard",
        "thumbnail" : ""
    },
    {
        "_id" : 3,
        "credit_card" : "Diners Club",
        "thumbnail" : ""
    },
    {
        "_id" : 4,
        "bank" : "AMEX",
        "thumbnail" : ""
    },
    {
        "_id" : 5,
        "bank" : "Hipercard",
        "thumbnail" : ""
    },
    {
        "_id" : 6,
        "bank" : "Elo",
        "thumbnail" : ""
    }
]);
