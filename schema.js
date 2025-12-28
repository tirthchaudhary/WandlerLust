const Joi = require("joi");
const joi=require("joi");



const listingSchema=Joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().required().min(0),
    }).required() 

});

const reviewSchema = Joi.object({
    review: Joi.object ({
     rating:Joi.number().required().min(1).max(5),
     comment:Joi.string().required(),
    }).required()
})


module.exports = { listingSchema, reviewSchema };
