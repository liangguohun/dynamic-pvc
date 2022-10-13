## 单机部署

docker run -it --name code-push-server -e TZ=Asia/Shanghai -p 3000:3000 -v $PWD/process.json:/process.json -v $PWD/config.js:/config.js -v $PWD/data/:/data/ -d code-push-server:5.7.1 

## 初始化数据库

docker exec -it code-push-server /bin/sh
/usr/local/bin/code-push-server-db init --dbhost 159.75.79.xx --dbuser root --dbpassword  xxx

## 创建配置

kubectl create configmap codepush-config --from-file=process.json --from-file=config.js

## 修改密码
Bearer 在获取token页面获取

curl -X PATCH -H "Authorization: Bearer token" -H "Accept: application/json" -H "Content-Type:application/json" -d '{"oldPassword":"123456","newPassword":"654321"}' http://127.0.0.1:3000/users/password
