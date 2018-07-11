FROM node:10.4.1 as builder

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM node:10.4.1
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
WORKDIR /usr/src/app
EXPOSE 4000
CMD ["node", "./dist/index.js"]