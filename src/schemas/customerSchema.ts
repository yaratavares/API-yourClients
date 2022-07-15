import Joi from "joi";

export const customerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    number: Joi.string().required(),
    idCategory: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required()
});