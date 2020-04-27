# 日志中心

## zk
'''
docker build -t 192.168.1.4:5000/liangguohun/zk:3.6.0 .
kubectl create configmap zoo-conf --from-file=zoo.cfg
kubectl create -f zookeeper-claim.yaml -f zookeeper-rc.yaml -f zookeeper-scv.yaml
### 验证
./bin/zkServer.sh status
cat: '/workspace/data'$'\r''/myid': No such file or directory
'$'\r'' 这是 在win下格式文件造成 
yum install dos2unix
dos2unix zoo.cfg
kubectl exec -it zookeeper-rc-pks5f /bin/sh

zk目录/bin/zkCli.sh
get /brokers/ids/0
{"listener_security_protocol_map":{"PLAINTEXT":"PLAINTEXT"},"endpoints":["PLAINTEXT://kafka-rc-g9dtd:50092"],"jmx_port":-1,"host":"kafka-rc-g9dtd","timestamp":"1587709294245","port":50092,"version":4}
'''

## kafka

> jps -l #查看java进程pid

### 创建topic
/var/app/bin/kafka-topics.sh --create --zookeeper 192.168.1.4:2181 --replication-factor 1 --partitions 1 --topic test
### 查看主题
/var/app/bin/kafka-topics.sh --describe --zookeeper 192.168.1.4:2181 --topic test

## filebeat
/usr/share/filebeat/ 镜像的安装路径
### 配置文件挂载 filebeat.yml
kubectl create configmap filebeat-conf --from-file=filebeat.yml
####      
/usr/local/bin/docker-entrypoint: line 8: exec: filebeat: not found 


## logstash
''' /usr/share/logstash/
kubectl create configmap logstash-conf --from-file=logstash.yml
kubectl create configmap logstash-pipelines --from-file=pipelines.yml
path.config 不指明具体文件的话则为目录下的logstash.conf
我这都是对应具体的
kubectl create configmap mysql-log --from-file=mysql-log.conf

问题
[ERROR][logstash.config.sourceloader] Could not fetch all the sources {:exception=&gt;ArgumentError, :message=&gt;"Only pipeline related settings are expected

pipelines 参数写错

问题
[org.apache.kafka.clients.NetworkClient][mysql] [Consumer clientId=logstash-0, groupId=logstash] Connection to node -1 (/192.168.1.4:9092) could not be established. Broker may not be available

创建topic
/var/app/bin/kafka-topics.sh --create --zookeeper 192.168.1.4:2181 --replication-factor 1 --partitions 1 --topic mysqlslowlogs
查看 topic
/var/app/bin/kafka-topics.sh --list --zookeeper 192.168.1.4:2181
查询 topic 详细信息
/var/app/bin/kafka-topics.sh --describe --zookeeper 192.168.1.4:2181 --topic mysqlslowlogs
'''



## es


## grafana
```
先注释掉grafana-conf
(镜像的WORKDIR /usr/share/grafana)
kubectl cp grafana-rc-6mt6n:conf ./conf
将配置的内容放到挂载的nfs目录下
```