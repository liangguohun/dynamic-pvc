
### rocketmq

```
https://github.com/apache/rocketmq-docker

cd image-build
dos2unix scripts/*
chmod 777 build-image.sh
dos2unix build-image.sh 
sh build-image.sh 4.7.0 alpine
build-image.sh 里头改了镜像的tag
docker push 192.168.1.4:5000/liangguohun/rocketmq:4.7.0
生成部署脚本

sh stage.sh 4.7.0
kubectl create -f rocketmq-claim.yaml
kubectl create -f rocketmq-scv.yaml
cd ./stages/4.7.0/templates/
chmod 777 play-kubernetes.sh
dos2unix play-kubernetes.sh
上传覆盖deployment.yaml
./play-kubernetes.sh
```