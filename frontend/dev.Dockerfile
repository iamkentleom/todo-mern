FROM node:gallium-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node /app/node_modules

USER node

CMD ["npm", "run", "dev"]

EXPOSE 5173