FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY package.json ./
RUN npm install --production

FROM node:lts-alpine AS builder

WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build

FROM node:lts-alpine AS runner

ARG X_TAG
WORKDIR /opt/app
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]