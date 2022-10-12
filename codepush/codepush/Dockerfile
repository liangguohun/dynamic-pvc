FROM node:12.22.12-alpine3.15

RUN npm config set unsafe-perm true
RUN npm config set registry https://registry.npm.taobao.org/ \
&& npm i -g code-push-server@5.7.1 pm2@latest --no-optional

COPY ./config.js /config.js
COPY ./process.json /process.json

RUN mkdir -p /data

VOLUME ["/data"]

EXPOSE 3001
EXPOSE 3002

CMD ["pm2-docker", "start", "/process.json"]
