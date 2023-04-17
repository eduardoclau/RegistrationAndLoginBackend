const Joi = require('@hapi/joi');

const RegisterValidate = (data) => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(6).max(75),
        password: Joi.string().required().min(8).max(100),
        password2: Joi.string().required().min(8).max(100)
    });



    return schema.validate(data);

}

const LoginValidate = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(6).max(75),
        password: Joi.string().required().min(8).max(100)
    });



    return schema.validate(data);

}

module.exports.LoginValidate = LoginValidate;
module.exports.RegisterValidate = RegisterValidate;
