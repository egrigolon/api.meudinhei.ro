/**
 * Collection of taxes
 */

 db.taxes.insert([
     {
         "type" : "IOF",
         "percentage" : 6.38,
         "apply_to" : [
             "credit_card"
         ]
     }
 ]);
