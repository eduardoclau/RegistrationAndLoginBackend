require('dotenv').config();
const { LoginValidate, registerValidate } = require('./validateController')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const userController = {

    register: async function (req, res) {

        const { error } = registerValidate(req.body);
        if (error) {
            return res.status(400).send(error.message);
        }

        const { name, email, password, password2 } = req.body;

        if (password !== password2) {
            return res.status(400).send("As senhas não são iguais. Por favor, digite a mesma senha.")
        }

        const selectedUser = await User.findOne({ email: req.body.email })

        if (selectedUser) return res.status(400).send("Email já cadastrado.")

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });

        try {

            const savedUser = await user.save()
            return res.send(savedUser)

        } catch (error) {

            return res.status(400).send(error)

        }



    },



    login: async function (req, res) {


        const { error } = LoginValidate(req.body);
        if (error) {
            return res.status(400).send(error.message);
        }


        const { email, password } = req.body;

        try {

            //Check if user exists

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).send("Email ou Senha inválidos.");
            }

            //Check if password matches

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).send("Email ou Senha inválidos.");
            }

            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);



            res.header('authorization-token', token);
            res.status(200).send("Logged in successfully.");

        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Server error.");
        }



    }


}

module.exports = userController;