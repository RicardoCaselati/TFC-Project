FROM node:16.14-alpine
WORKDIR /app-frontend
COPY . . 
RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build && yarn install --production --ignore-scripts --prefer-offline
ENTRYPOINT [ "npm", "start" ]