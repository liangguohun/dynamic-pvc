# 日志中心
zk
docker build -t 192.168.1.4:5000/liangguohun/zk:3.6.0 .
kubectl create configmap zoo-conf --from-file=zoo.cfg
kubectl create -f zookeeper-claim.yaml -f zookeeper-rc.yaml -f zookeeper-scv.yaml


kafka

filebeat

logstash

es

grafana

