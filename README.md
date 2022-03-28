# _User authentication with passportjs_

User-auth is a authentication coded in JavaScript and use mongoDb

## Features

- sign in and sign up  and logout requests using local passport strategy with email verification
- the possibility to update your informations that you stored in the database
- If you forget your password just send a forget password request 
-Deleting your account

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
- [Express] - fast node.js network app framework 
- [Passport] is authentication middleware for Node.js. 
- [MongoDB] MongoDB is a source-available cross-platform document-oriented database
- [docker] Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels. 

## Installation

User-Auth requires [Docker](https://www.docker.com) 

- Git clone this repository
- Open Your ide (VsCode) and run the command " docker-compose up --build  "

this should be displayed 
![alt text](https://res.cloudinary.com/cloudperso/image/upload/v1648429826/Capture_d_écran_2022-03-28_à_2.09.56_AM_omtllx.png)

By running this command it will launch the express (automatically run : npm install then npm start) , mongodb and the maildev SMTP server on diffrents containers. you can check the diffrents containers in the docker-compose.yml file

## Testing

To test the api you will need a testing application like [Postman](https://www.postman.com) or you can use rest client plugin in vsCode. If you want to follow along with this readme we will use [Postman](https://www.postman.com)

These are few steps you should do before start testing the api :
1. open postman 
2. fork (import) these [requests]

##### Register
To test registration we have to send a POST request to localhost:3000/register
enter the following information : 
 - username : USERNAME
 - email : EMAIL@MAILER.DOMAIN
 - password : *******
 - adminCode : secretcode123
 
it will send an email to the maildev server that you can access by from the link "http://localhost:1080/" to verify the email

Comments:
If you send a empty "form" i will diplay "User is empty" in the console 
If you don't send in the field adminCode "secretcode123" it wil save isAdmin in the data base

![alt text](https://res.cloudinary.com/cloudperso/image/upload/v1646041350/Capture_d_%C3%A9cran_2022-02-28_%C3%A0_10.41.45_AM_e6wn8m.png)

##### Login

To test login we have to send a POST request to localhost:3000/login
enter the following information : 
 - username : YOUR_USERNAME
 - password : *******

It will return a .json with the user informations like this :

![alt text](https://res.cloudinary.com/cloudperso/image/upload/v1648432206/Capture_d_%C3%A9cran_2022-03-28_%C3%A0_2.49.32_AM_cbsrlg.png)

##### Forget Password 

To test login we have to send a POST request to localhost:3000/forgot
enter your email : 
 - email : EMAIL@MAILER.DOMAIN

It wil simply send an email with a link that will redirect you to a form a enter your new password and after changing the password it will resend you a confirmation email

![alt text](https://res.cloudinary.com/cloudperso/image/upload/v1648432461/Capture_d_%C3%A9cran_2022-03-28_%C3%A0_2.54.09_AM_n8zegx.png)

##### Update User

To test editing profile we have to send a POST request to localhost:3000/edit/:id
enter the following information :

 - username : NEW_USERNAME
 - password : *******

this will update the non-empty field 

##### Delete User

To test deleting profile we have to send a DELETE request to localhost:3000/:id
and Don't forget to pass in the id of the user

##### Show a profile

To test showing a specific profile we have to send a GET request to localhost:3000/profile/:id
Don't forget to pass in the id of that specific user.
And like the login request it will send a .json with informations of the user.



## License

Anis

   [passport]: <https://www.passportjs.org>
   [mongoDB]: <https://www.mongodb.com>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [postman]: <https://www.postman.com>
   [requests]: <https://www.getpostman.com/collections/542b0e7cfbea5c76c3e0> 
   [docker]: <https://www.docker.com>

