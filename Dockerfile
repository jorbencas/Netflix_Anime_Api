FROM node:12.18.4-alpine as base-node
ENV NODE_ENV=dev
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY node/ ./node/
RUN cd node && npm install
EXPOSE 3001
CMD npm run start