FROM node:16.15.0-alpine
ENV NODE_ENV=dev
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 3001
CMD npm run start