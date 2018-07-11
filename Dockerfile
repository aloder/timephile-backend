FROM node:10.4.1 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install yarn -g
RUN yarn build

FROM node:10.4.1
CMD ["node", "./dist/index.js"]