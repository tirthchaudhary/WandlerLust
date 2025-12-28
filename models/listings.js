const mongoose=require('mongoose');
const Review = require('./review');
const { ref } = require('joi');
const Schema=mongoose.Schema;


const listingSchema= new Schema ({
    title:{
        type:String,
        require:true,
    },
    description:String,
    image: {
   filename: {
    type: String,
    default: "listingimage"
   },
   url: {
    type: String,
    default: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500..."
  }
  },

    price:String,
    location:String,
    country:String,
    reviews : [
      {
      type:Schema.Types.ObjectId,
      ref:"Review"
      }
    ],
    owner:{
      type:Schema.Types.ObjectId,
      ref:'User',
    },

});

listingSchema.post("findOneAndDelete",async(listing)=>{
if(listing){
   await Review.deleteMany({_id : {$in : listing.reviews}});
}
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;


