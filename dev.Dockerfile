FROM node:10-alpine

WORKDIR /app/

RUN npm install -g nodemon

COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["nodemon", "src/index.js"]
 