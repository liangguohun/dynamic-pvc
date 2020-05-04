
### rocketmq

```
https://github.com/apache/rocketmq-docker

初始化配置
将相应目录覆盖上传
deployment.yaml 覆盖templates/kubernetes/deployment.yaml

sh stage.sh 4.7.0
构建镜像
dos2unix image-build/scripts/*
dos2unix image-build/build-image.sh 
chmod 777 image-build/build-image.sh

cp -R ./stages/4.7.0/templates/conf image-build/
kubectl create configmap rocketmq-conf  --from-file=./image-build/conf/broker.conf
cd image-build
sh build-image.sh 4.7.0 alpine

build-image.sh 里头改了镜像的tag
docker push 192.168.1.4:5000/liangguohun/rocketmq:4.7.0

cd ../

dos2unix ./stages/4.7.0/templates/play-kubernetes.sh 
chmod 777 ./stages/4.7.0/templates/play-kubernetes.sh


kubectl create -f rocketmq-claim.yaml
kubectl create -f stages/4.7.0/templates/kubernetes/deployment.yaml
kubectl create -f rocketmq-scv.yaml
```