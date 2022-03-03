FROM node:latest

WORKDIR /Users/anisdemni/Desktop/Pi/User-Auth-with-PassportJs

#Install app dependencies

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"]