FROM mhart/alpine-node:12

RUN mkdir app
WORKDIR /app
COPY . .
RUN npm i -g @nestjs/cli knex
RUN npm i
RUN nest build

ENV NODE_ENV="production"
EXPOSE 3000
CMD ["knex", "migrate:latest"]
ENTRYPOINT ["nest", "start"]