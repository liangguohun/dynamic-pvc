## 单机部署

docker run -it --name code-push-server -e TZ=Asia/Shanghai -p 3200:3200 -v $PWD/process.json:/process.json -v $PWD/config.js:/config.js -v $PWD/data/:/data/ -d code-push-server:5.7.1 


## 创建配置

kubectl create configmap codepush-config --from-file=process.json --from-file=config.js
