# 日志中心
zk
docker build -t 192.168.1.4:5000/liangguohun/zk:3.6.0 .
kubectl create configmap zoo-conf --from-file=zoo.cfg
kubectl create -f zookeeper-claim.yaml -f zookeeper-rc.yaml -f zookeeper-scv.yaml

验证
./bin/zkServer.sh status

cat: '/workspace/data'$'\r''/myid': No such file or directory
'$'\r'' 这是 在win下格式文件造成 
yum install dos2unix
dos2unix zoo.cfg
kubectl exec -it zookeeper-rc-4s9dw /bin/sh

kafka
> jps -l #查看java进程pid
创建topic
/var/app/bin/kafka-topics.sh --create --zookeeper 192.168.1.4:2181 --replication-factor 1 --partitions 1 --topic test
查看主题
/var/app/bin/kafka-topics.sh --describe --zookeeper 192.168.1.4:2181 --topic test

filebeat

logstash

es

grafana

