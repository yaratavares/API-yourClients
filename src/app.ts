import express, {json} from "express"
import "express-async-errors"
import cors from "cors"
import "./setup.js"

import customerRouter from "./routers/customerRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import { errorHandleMiddleware } from "./middlewares/errorHandlingMiddleware.js";

const app = express();
app.use(cors());
app.use(json());
app.use(customerRouter);
app.use(categoryRouter)
app.use(errorHandleMiddleware);

export default app;