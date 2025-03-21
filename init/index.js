const mongoose=require("mongoose");
const initData =require("./data.js");
const Listing =require("../models/listing.js");

//connecting to database 

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

//deleting the previous stored data

const initDB = async()=>{
    await  Listing.deleteMany({});
    //Inserting the data form data.js file
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
};

initDB();