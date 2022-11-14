FROM node:alpine

#create app main directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["node", "dist/main"]


