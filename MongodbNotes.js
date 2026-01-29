// CRUD -->


// 1) show all database -->  show dbs
// 2) create a new Database or use any existing databse --> use DatabaseName

// 3) create a collection inside Database --> db.createCollection('collectionName')

// 4) insert data inside collection --> 
// a) insert single Data --> db.collectionName.insertOne({key:value, key:value})
// b) insert multiple Data --> db.collectionName.insertMany([{} , {} , {}])

//5) get data  -->
    // a)get all data inside a collection --> db.collectionName.find()
    // b) find single matched Data -->  db.collectionName.findOne({key : value}) 

//6) Update Data -->
    // single data update--> db.collectionName.updateOne({key:value} , {$set:{key:value}})
    // single multiple update--> db.collectionName.updateMany({key:value} , {$set:{key:value}})

//7) delete Data --> 
// a) delete single data --> db.collectionName.deleteOne({key:value})
// a) delete Multiple data --> db.collectionName.deleteMany({key:value})

//8) delete a collection folder --> db.collectionName.drop()
// 9) delete a database --> db.dropDatabase()

// other filter method --> $gt , $lt , $gte , $lte ,$et 

// example --> db.collectionName.find({price:{$gt:100}}) 
// example --> db.collectionName.find({rating:{$gt:3.5}}) 
// example --> db.collectionName.find({price:{$gt:100}}) 

