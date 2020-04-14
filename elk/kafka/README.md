### 构建镜像
docker build -t liangguohun/kafka:1.0 .

docker tag liangguohun/kafka:1.0 192.168.1.4:5000/liangguohun/kafka:1.0

docker push 192.168.1.4:5000/liangguohun/kafka:1.0