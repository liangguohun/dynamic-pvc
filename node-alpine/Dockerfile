FROM node:10.17.0-alpine

# RUN npm config set registry http://192.168.1.4:8081/repository/npm-group/ \
RUN npm config set registry https://registry.npm.taobao.org \
    && npm install -g umi react-native-cli \
    && npm cache clean -f


