# JSONServer + JWT Auth

Fake API REST utilisant json-server avec l'authentification JWT.

Mis en œuvre de l'End-points: login,register

## Install

$ npm install
$ npm run start-auth

## How to login/register?

POST <http://localhost:8080/auth/login>
POST <http://localhost:8080/auth/register>

User login 
{
    "username":"user",
    "email":"user@email.com",
    "password":"usermp"
}

un user doit recevoir un acces token

{
   "access_token": "<ACCESS_TOKEN>"
}

envoyer cette autorisation avec une requete aux endpoints protected

Authorization: Bearer <ACCESS_TOKEN>
