
## prometheus

```
kubectl create configmap prom-conf --from-file=prometheus.yml

http://192.168.1.4:9090/


```

### mysqld_exporter

```
https://github.com/prometheus/mysqld_exporter

dos2unix -R *
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .
docker build -t 192.168.1.4:5000/liangguohun/mysqld_exporter:1.0 .
docker push 192.168.1.4:5000/liangguohun/mysqld_exporter:1.0
docker rmi 192.168.1.4:5000/liangguohun/mysqld_exporter:1.0
后台mysql 进入命令行
CREATE USER 'exporter'@'%' IDENTIFIED BY 'xxmm.@6';
GRANT PROCESS, REPLICATION CLIENT, SELECT ON *.* TO 'exporter'@'%';
FLUSH PRIVILEGES;
```

### redis_exporter

```
https://github.com/oliver006/redis_exporter

golang.org/x/sys@v0.0.0-20200420163511-1957bb5e6d1f: unrecognized import path "golang.org/x/sys" (https fetch: Get https://golang.org/x/sys?go-get=1: dial tcp 216.239.37.1:443: i/o timeout)


mkdir -p $GOPATH/src/golang.org/x
cd $GOPATH/src/golang.org/x
git clone https://github.com/golang/sys.git

Golang 1.13: 解决国内 go get 无法下载的问题
1、使用国内七牛云的 go module 镜像
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
2、阿里云 Go Module 国内镜像仓库服务
go env -w GO111MODULE=on
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct

构建后根据docker 选择合适的
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .
docker build -t 192.168.1.4:5000/liangguohun/redis_exporter:1.0 .
docker push 192.168.1.4:5000/liangguohun/redis_exporter:1.0
docker rmi 192.168.1.4:5000/liangguohun/redis_exporter:1.0
```

### rocketmq_exporter

```
https://github.com/hepyu/RocketmqExporter
https://github.com/apache/rocketmq-exporter

docker build -t 192.168.1.4:5000/liangguohun/rocketmq_exporter:1.0 .
docker push 192.168.1.4:5000/liangguohun/rocketmq_exporter:1.0

```