## 单机部署

* 创建网络 
docker network create --driver bridge --subnet 192.168.1.0/24 --gateway 192.168.1.1 bianyuan \
-- 我们使用内部网络通讯，对外只通过verynginx 访问 \
docker run -it --name code-push-server -e TZ=Asia/Shanghai --network=bianyuan --ip 192.168.1.8 -v $PWD/process.json:/process.json -v $PWD/config.js:/config.js -v $PWD/data/:/data/ -d code-push-server:5.7.1 \
运行时加入bianyuan 这个network就可以容器间通讯，不用过多暴露端口 \
docker network connect bianyuan verynginx

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
$ cd bordergirl
$ npm install


code-push deployment ls bordergirl-android -k 

Production
配置生成环境的key 就更新生产的变更
Staging(灰度)
测试debug 的包用测试的环境key
```
## 创建应用
code-push app add bordergirl-ios ios react-native  #iOS版 \
code-push app add bordergirl-android android react-native #android版

## 打包发布日常更新灰度回滚操作

npm run bundle-android \
code-push release-react bordergirl-ios ios -d Production #发布到code-push-server ios \
code-push release-react bordergirl-android android -d Production #发布code-push-server android \
将打包发布流程合二为一 \
code-push release-react bordergirl-android android --t 1.0.0 --dev false -d Staging --des "初始调试" --m true -r 50 \
其中参数--t为二进制(.ipa与apk)安装包的的版本, android 在build.gradle内, --dev为是否启用开发者模式(默认为false) \
--d是要发布更新的环境分Production与Staging(默认为Staging)；--des为更新说明；--m 是强制更新  \
-r 50 指灰度更新50%(0-100),一般情况下不需要灰度更新

## 灰度发布
```
Usage: code-push promote <appName> <sourceDeploymentName> <destDeploymentName> [--description <description>] [--mandatory] [--rollout <rolloutPercentage>]

选项：
  --description, --des  描述  [string] [默认值: null]
  --disabled, -x        是否禁用该更新  [boolean] [默认值: null]
  --mandatory, -m       是否强制更新  [boolean] [默认值: null]
  --rollout, -r         此促进更新推送用户的百分比  [string] [默认值: null]

示例：
  code-push promote MyApp Staging Production                                   "MyApp"中"Staging"部署的最新更新发布到"Production"部署中
  code-push promote MyApp Staging Production --des "Production rollout" -r 25  "MyApp"中"Staging"部署的最新更新发布到"Production"部署中, 并且只推送25%的用户
```

## 查看历史版本
code-push deployment history bordergirl-android Staging
## 回滚
code-push rollback <AppName> <Production|Staging> -t <Label>
## 修改描述
code-push patch  <AppName>  <Production|Staging>  -l  <Label>  --des  <desc>
## 查看账号下创建的应用
code-push app list
## 删除应用
code-push remove <AppName>
## 重命名
code-push app rename  <OriginalAppName>  <name>
  
  
