import * as Joi from 'joi';

const message = 'All fields must be filled';

const loginJoiSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': message,
    'string.empty': message,
  }),
  username: Joi.string(),
  password: Joi.string().required().messages({
    'any.required': message,
    'string.empty': message,
  }),
  role: Joi.string(),
});

export default loginJoiSchema;
