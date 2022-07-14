import Joi from "joi";
import Customer from "../models/customerModel";

export const customerSchema = Joi.object<Customer>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    number: Joi.string().required(),
    category: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required(),
})