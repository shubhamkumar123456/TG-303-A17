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