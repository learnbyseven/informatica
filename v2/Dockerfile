## Docker pull giriraj789/informatica:v2 
FROM node:16-bullseye-slim AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install

FROM gcr.io/distroless/nodejs:16
ENV FORCE_COLOR=1
EXPOSE 80
COPY --from=build /usr/src/app /usr/src/app
WORKDIR /usr/src/app
CMD ["app.js"]
