const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename:String,
        url:{
        type:String,
        set: (v)=> v==="" ? "https://unsplash.com/photos/trees-beside-white-house-IYfp2Ixe9nM" : v
    },
    } ,
    price: Number,
    location: String,
    country:String,
});

const Listing = mongoose.model("listing",listingSchema);

module.exports=Listing;