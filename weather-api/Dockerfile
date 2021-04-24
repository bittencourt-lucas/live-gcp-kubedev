FROM node:10.24.1

WORKDIR /weather-api

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "src/server.js"]
