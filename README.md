# RegistrationandLoginBackend

O Sistema de Registro e Login é um software que utiliza tecnologias de backend para gerenciar o cadastro e autenticação de usuários. Ele é construído utilizando NodeJS e Express como plataforma de desenvolvimento web e MongoDB como banco de dados NoSQL, com a biblioteca Mongoose para facilitar o gerenciamento do banco de dados.

O software utiliza criptografia Bcrypt para armazenar senhas de usuários de forma segura no banco de dados. Além disso, ele utiliza autenticação JWT (JSON Web Token) para garantir que somente usuários autenticados possam acessar as funcionalidades do sistema.

O software também inclui uma verificação da extensão de senha, nome e email com a biblioteca '@hapi/joi', que garante que os dados de entrada fornecidos pelos usuários estejam no formato correto.

# Tecnologias Utilizadas:

NodeJS

Express

MongoDB

Mongoose

Bcrypt

JWT

'@hapi/joi'


# Resumo das Funcionalidades:

Cadastro de novos usuários

Autenticação de usuários registrados

Armazenamento seguro de senhas criptografadas

Verificação de extensão de senha, nome e email

Utilização de tokens JWT para autenticação e segurança das funcionalidades do sistema.
