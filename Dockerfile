FROM node:18.20.5-bullseye

WORKDIR /app
COPY package* .
RUN npm install --save-prod
COPY src .
EXPOSE 3000

ENV APP_PORT=3000
ENV NODE_ENV="production"
ENV MODEL_URL="https://storage.googleapis.com/submissionmlgc-nurfianqodar-bucket/models/model.json"

CMD [ "node", "index.js" ] 
