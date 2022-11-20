FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build
ENV PORT 5000
ENV SECRET_KEY = CreateReliableKeyUsingRandomGenerator
EXPOSE ${PORT}

CMD ["npm", "start"]
