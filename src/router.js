import { Router } from "express";
import  ConditionRouter from "./controllers/condition";

const router = Router();

router.get("/health-check", (req, res) => {
  res.status(200).send("I am OK");
});

router.use("/conditions", ConditionRouter);

export default router;
