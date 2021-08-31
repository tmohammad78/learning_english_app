FROM node:12.13.0-alpine as build

WORKDIR /usr/src/app
COPY package* ./
COPY . .
RUN npm install
RUN npm run build