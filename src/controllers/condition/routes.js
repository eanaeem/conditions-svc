import { Router } from "express";
import { accountControllerInstance } from "./ConditionController";

console.log('roue-----')
const router = Router();

router.route("/").get(accountControllerInstance.getConditions);

export default router;
