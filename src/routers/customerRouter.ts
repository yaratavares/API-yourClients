import { Router } from "express";
import * as customerController from "../controllers/customerController.js";
import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import { customerSchema } from "../schemas/customerSchema.js";

const customerRouter = Router();

customerRouter.get("/clients", customerController.getCustomers );
customerRouter.post("/clients", validateSchemaMiddleware(customerSchema),customerController.createCustomer);
customerRouter.put("/clients/:id", validateSchemaMiddleware(customerSchema), customerController.updateCustomer);
customerRouter.delete("/clients/:id", customerController.deleteCustomer);

export default customerRouter;