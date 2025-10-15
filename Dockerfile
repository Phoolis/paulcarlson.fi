# Build stage
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
