FROM node:18-alpine

WORKDIR /app/

COPY package*.json ./
RUN npm i

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY . .

CMD [ "npm", "start", "--", "-p", "3000" ]