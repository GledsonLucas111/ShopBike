import dotenv from "dotenv";
import { AddressInfo } from "net";
import express, {Express} from "express";
import { bikeRouter } from "./router/bikeRouter";
import cors from 'cors'


dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/bike", bikeRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
