// const mongoose=require("mongoose");
// const initData=require("./data.js");
// const Listing=require("../models/listings.js");


// const dbUrl=process.env.ATLAS_URL;

// async function main() {
//     await mongoose.connect(dbUrl);
// };

// main().then(()=>{
//     console.log("connected to mongoDB");
// }).catch(err=>{
//     console.log(err);
// });

// const initDB= async () => {
//     await Listing.deleteMany({});
//  initData.data=  initData.data.map((obj)=>({...obj,owner:'694d23ba84315ef5f47e2b42'}))
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
// }

// initDB();




