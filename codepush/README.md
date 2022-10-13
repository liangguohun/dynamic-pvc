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

## 使用
```
https://github.com/Microsoft/react-native-code-push
$ code-push app add bordergirl-ios ios react-native  #iOS版
$ code-push app add bordergirl-android android react-native #android版
$ cd bordergirl
$ npm install


code-push deployment ls bordergirl-android -k 

Production
配置生成环境的key 就更新生产的变更
Staging(灰度)
测试debug 的包用测试的环境key


```

## 打包发布日常更新灰度回滚操作

npm run bundle-android \
$ code-push release-react bordergirl-ios ios -d Production #发布到code-push-server ios \
$ code-push release-react bordergirl-android android -d Production #发布code-push-server android \
将打包发布流程合二为一 \
$ code-push release-react bordergirl-android android --t 1.0.0 --dev false -d Staging --des "初始调试" --m true \
其中参数--t为二进制(.ipa与apk)安装包的的版本, android 在build.gradle内, --dev为是否启用开发者模式(默认为false) \
--d是要发布更新的环境分Production与Staging(默认为Staging)；--des为更新说明；--m 是强制更新 

