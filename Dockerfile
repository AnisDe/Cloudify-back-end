FROM node:16

WORKDIR /Users/anisdemni/Desktop/Pi/User-Auth-with-PassportJs

#Install app dependencies

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ["npm" ,"start"]