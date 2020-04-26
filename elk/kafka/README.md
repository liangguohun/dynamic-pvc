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


kubectl get po -o wide |grep kafka
netstat -tunlp | grep 9192


操.... 二进制装了（最后灵感来解决了，svc的selector没有选对）
tar -zxvf jdk-8u251-linux-x64.tar.gz -C /usr/local/
vi /etc/profile
export JAVA_HOME=/usr/local/jdk1.8.0_251
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib

source /etc/profile
java -version

wget http://mirror.bit.edu.cn/apache/kafka/2.4.1/kafka_2.12-2.4.1.tgz
tar -zxvf kafka_2.12-2.4.1.tgz -C /usr/local/
cd /usr/local/kafka_2.12-2.4.1
vim config/server.properties
打开注释
listeners=PLAINTEXT://:9092
zookeeper.connect=192.168.1.4:2181
启动
./bin/kafka-server-start.sh config/server.properties &

生产
bin/kafka-console-producer.sh --topic test --broker-list 192.168.1.4:9092
消费，新窗口
bin/kafka-console-consumer.sh --bootstrap-server 192.168.1.4:9092 --topic test