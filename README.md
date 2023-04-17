# Registration and Login - Backend

O Sistema de Registro e Login é um software que utiliza tecnologias de backend para gerenciar o cadastro e autenticação de usuários. Ele é construído utilizando NodeJS e Express como plataforma de desenvolvimento web e MongoDB como banco de dados NoSQL, com a biblioteca Mongoose para facilitar o gerenciamento do banco de dados.

O software utiliza criptografia Bcrypt para armazenar senhas de usuários de forma segura no banco de dados. Além disso, ele utiliza autenticação JWT (JSON Web Token) para garantir que somente usuários autenticados possam acessar as funcionalidades do sistema.

O software também inclui uma verificação da extensão de senha, nome e email com a biblioteca '@hapi/joi', que garante que os dados de entrada fornecidos pelos usuários estejam no formato correto.

Neste arquivo, há somente o código backend, com a lógica de registro, login, autenticação e segurança. Estou desenvolvendo o sistema completo com NextJS/ReactJS - sistema que contará, também, além da interface, função de atualização de senha.

# Tecnologias Utilizadas:

NodeJS

Express

MongoDB

Mongoose

Bcrypt

JWT

@hapi/joi


# Resumo das Funcionalidades:

Cadastro de novos usuários

Autenticação de usuários registrados

Armazenamento seguro de senhas criptografadas

Verificação de extensão de senha, nome e email

Utilização de tokens JWT para autenticação e segurança das funcionalidades do sistema.



# Registration and Login - Backend

The Registration and Login system is a software that uses backend technologies to manage user registration and authentication. It is built using NodeJS and Express as a web development platform and MongoDB as a NoSQL database, with the Mongoose library to facilitate database management.

The software uses Bcrypt encryption to securely store user passwords in the database. Additionally, it uses JWT (JSON Web Token) authentication to ensure that only authenticated users can access system functionality.

The software also includes password, name, and email extension verification with the '@hapi/joi' library, which ensures that user-provided input data is in the correct format.

This file contains only the backend code, with registration, login, authentication, and security logic. I am developing the complete system with NextJS/ReactJS - a system that will also include a password update function, in addition to the interface.


# Technologies Used:

NodeJS

Express

MongoDB

Mongoose

Bcrypt

JWT

@hapi/joi

# Summary of Features:

Registration of new users
Authentication of registered users
Secure storage of encrypted passwords
Verification of password, name, and email extension
Use of JWT tokens for authentication and security of system functionalities.
