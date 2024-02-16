FROM node:20-alpine
WORKDIR /opt/lucio/
COPY ./ ./
RUN npm i -g pnpm
RUN pnpm install --force
RUN pnpm run build
CMD pnpm start