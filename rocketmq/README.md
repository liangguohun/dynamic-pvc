
### rocketmq

```
https://github.com/apache/rocketmq-docker

cd image-build
chmod 777 build-image.sh
dos2unix build-image.sh 
sh build-image.sh 4.7.0 alpine
docker tag apacherocketmq/rocketmq:4.7.0-alpine 192.168.1.4:5000/liangguohun/rocketmq_alpine:4.7.0
docker push 192.168.1.4:5000/liangguohun/rocketmq_alpine:4.7.0

```