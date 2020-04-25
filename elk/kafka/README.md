### 构建镜像
docker build -t 192.168.1.4:5000/liangguohun/kafka:1.0 .

docker tag liangguohun/kafka:1.0 192.168.1.4:5000/liangguohun/kafka:1.0

docker push 192.168.1.4:5000/liangguohun/kafka:1.0

docker rmi 192.168.1.4:5000/liangguohun/kafka:1.0
#### 创建configmap
kubectl create configmap kafka-conf --from-file=server.properties

### 重启问题

'''ERROR Error while creating ephemeral at /brokers/ids/0, node already exists and owner '72057626624065544' does not match current session '72057626624065546' (kafka.zk.KafkaZkClient$CheckedEphemeral)
[2020-04-23 15:39:47,181] ERROR [KafkaServer id=0] Fatal error during KafkaServer startup. Prepare to shutdown (kafka.server.KafkaServer)
org.apache.zookeeper.KeeperException$NodeExistsException: KeeperErrorCode = NodeExists '''

修改指定/var/app/config/zookeeper.properties下
dataDir 属性与zookeeper一致
