FROM node:8.11.4-alpine

RUN npm config set unsafe-perm true
RUN npm config set registry https://registry.npm.taobao.org/ \
&& npm i -g code-push-server@0.5.2 pm2@latest --no-optional

COPY ./config.js /config.js
COPY ./process.json /process.json

RUN mkdir -p /data/storage /data/tmp

VOLUME ["/data"]

EXPOSE 3001
EXPOSE 3002

CMD ["pm2-docker", "start", "/process.json"]
