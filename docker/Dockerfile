FROM node:18.10.0-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 3001
CMD npm run start