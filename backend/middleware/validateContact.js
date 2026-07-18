import { body } from "express-validator";

const validateContact = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required."),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email."),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required."),

  body("message")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters.")
];

export default validateContact;