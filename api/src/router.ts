import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from "./controllers/UserController"

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

router.get("/surveys", surveysController.show);
router.get("/answers/:value", answerController.execute);

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.post("/sendMail", sendMailController.execute);

export { router };