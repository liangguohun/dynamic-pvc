# 日志中心

## zk
```
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
```

## kafka

> jps -l #查看java进程pid

### 创建topic
/var/app/bin/kafka-topics.sh --create --zookeeper 192.168.1.4:2181 --replication-factor 1 --partitions 1 --topic test
### 查看主题
/var/app/bin/kafka-topics.sh --describe --zookeeper 192.168.1.4:2181 --topic test
### 生产消息
/var/app # ./bin/kafka-console-producer.sh --broker-list 192.168.1.4:9092 --topic mysqlslowlogs
### 查看拥有的主题
/var/app # ./bin/kafka-topics.sh --list --zookeeper 192.168.1.4:2181
### 消费消息
./bin/kafka-console-consumer.sh --bootstrap-server 192.168.1.4:9092 --topic mysqlslowlogs --from-beginning 
## filebeat
/usr/share/filebeat/ 镜像的安装路径
### 配置文件挂载 filebeat.yml
kubectl create configmap filebeat-conf --from-file=filebeat.yml
####      
/usr/local/bin/docker-entrypoint: line 8: exec: filebeat: not found 


## logstash
```
/usr/share/logstash/
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


在线调试
http://grokdebug.herokuapp.com/
```



## es
```
查询是否健康
http://192.168.1.4:9201/_cat/health?v
获取节点列表
http://192.168.1.4:9201/_cat/nodes?v
查询所有索引
http://192.168.1.4:9201/_cat/indices?v
查看索引模板
http://192.168.1.4:9201/_template/nginxlogs*
配置
https://www.cnblogs.com/sxdcgaq8080/p/10031744.html
https://www.cnblogs.com/jiaosf/p/11604274.html
无法自动创建lostash 输出的
索引原因是在Elasticsearch、Kibana、Logstash都安装x-pack后，在elasticsearch.yml中配置过让Elasticsearch自动创建索引的配置项
# action.auto_create_index: .security,.monitoring*,.watches,.triggered_watches,.watcher-history*,.ml*,
action.auto_create_index: mysql-slowlog-*,

kubectl cp es-rc-2m2br:config/elasticsearch.yml ./
kubectl create configmap es-conf --from-file=elasticsearch.yml 

查看具体索引
http://192.168.1.4:9201/nginxlogs-2020.05.01?pretty

索引没有出来，是mysql 日志文件的访问权限问题
需要进到mysql容器去
cd /var/lib/mysql
chmod o+r sql_slow.log
chmod 777 sql_slow.log (sleep 没有创建慢查询记录是真没有慢查询)


创建nginx 模板
postman post application/json json内容如nginxlogs.json响应"acknowledged": true 则成功
http://192.168.1.4:9201/_template/nginxlogs*?include_type_name=true

https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html
```


## grafana
```
先注释掉grafana-conf
(镜像的WORKDIR /usr/share/grafana)
kubectl cp grafana-rc-6mt6n:conf ./conf
将配置的内容放到挂载的nfs目录下

安装插件
grafana-cli plugins install grafana-piechart-panel
grafana-cli plugins install grafana-worldmap-panel
```