/**
 * Drop current collection
 */

db.currencies.drop();

/**
 * Create collection of currencies
 */

db.currencies.insert([
    {
        "currency" : "BRL",
        "name" : "Real"
    },
    {
        "currency" : "USD",
        "name" : "Dólar Americano"
    },
    {
        "currency" : "EUR",
        "name" : "Euro"
    }
]);

/**
 * Create currencies index
 */

db.currencies.createIndex( { "currency" : 1 } );
