import Joi from "joi";

export interface CreateCustomer {
    name: string,
    email: string,
    number: string,
    idCategory: string,
    street: string,
    city: string,
    state: string,
    zip: string
}

export const customerSchema = Joi.object<CreateCustomer>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    number: Joi.string().required(),
    idCategory: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required()
});