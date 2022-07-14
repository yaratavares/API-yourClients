import { Router } from "express";
import { getAllClients } from "../controllers/customerController.js";

const customerRouter = Router();

customerRouter.get("/clients", getAllClients );
customerRouter.post("/clients");
customerRouter.put("/clients");
customerRouter.delete("/clients");

export default customerRouter;