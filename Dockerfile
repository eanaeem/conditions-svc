FROM node:10.18-alpine3.9

WORKDIR 'usr/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9001

CMD [ "npm", "run", "startup" ]
