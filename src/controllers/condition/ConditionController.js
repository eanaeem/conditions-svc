
import conditions from '../../seed/conditions.json'
import logger from "../../utils/logger";

class ConditionController {
  getConditions = async (req, res) => {
    try {
      console.log(conditions);
      logger.info("getConditions", );
      res.status(200).json(conditions);
    } catch (error) {
      logger.error(error);
      return error.data;
    }
  };

}

export const accountControllerInstance = new ConditionController();