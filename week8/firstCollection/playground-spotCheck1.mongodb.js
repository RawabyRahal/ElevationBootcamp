

use('test-db');

db.firstCollection.insert({
    currentBalance : 10000,
    accountDetails :{
        fullName : "Alexander R",
        accountNumber : 800112338
    }
})

// db.firstCollection.find({})