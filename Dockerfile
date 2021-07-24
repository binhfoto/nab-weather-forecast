# Step 1: build the weather app
FROM node:14.13.0 as build-weather-app

WORKDIR /weather-app
COPY . .
RUN yarn install
RUN yarn build

# Step 2: build docker image with nginx as reversed proxy to bypass requesting to metaweather.com
FROM nginx

WORKDIR .
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-weather-app /weather-app/build /usr/share/nginx/html

