FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev


FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
# Inject build date from ARG → ENV
ARG LAST_UPDATED
ENV VITE_LAST_UPDATED=${LAST_UPDATED}
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=build-env /app/build/client /usr/share/nginx/html
EXPOSE 80