# dynamic-pvc
## 模板生成k8s pvc 动态创建卷的模板

1、修改执行权限

chmod u+x init-pvc

2、初始化环境

./init-pvc -nfs.server 192.168.1.4 -nfs.path /data_center

3、创建日常操作的pvc和pod(初始化后，没个新部署都这里一条命令ok)

kubectl create -f test-claim.yaml -f test-pod.yaml


### 创建configmap

kubectl create configmap zoo-conf --from-file=zoo.cfg

### 删除节点
kubectl delete node slave0

### 删除异常容器
kubectl delete pods zookeeper-rc-6vxl7 --grace-period=0 --force 

kubectl delete type typename
type 是资源类型，可以是node, pod, rs, rc, deployment, service等等，typename是这个资源的名称

可能是deployment 没有rc
kubectl get deployment
kubectl delete deployment rocketmq
---

### 查找可用镜像
./list_img_tags.sh gitlab/gitlabt-ce


```
k8s中command、args和dockerfile中的entrypoint、cmd之间的关系
当用户同时写了command和args的时候自然是可以覆盖DockerFile中ENTRYPOINT的命令行和参数,那么对于具体情况呢，比如仅仅写了command或者args的时候呢？完整的情况分类如下：

如果command和args均没有写，那么用Docker默认的配置。
如果command写了，但args没有写，那么Docker默认的配置会被忽略而且仅仅执行.yaml文件的command（不带任何参数的）。
如果command没写，但args写了，那么Docker默认配置的ENTRYPOINT的命令行会被执行，但是调用的参数是.yaml中的args。
如果如果command和args都写了，那么Docker默认的配置被忽略，使用.yaml的配置
```

### 批量删除镜像容器
```
倒叙后删除旧的镜像
docker rmi `docker images | grep cloud-gateway | sort -r | tail -n +2 | awk '{print $3}'`
docker rm `docker ps -a | grep cloud-gateway | awk '{print $1}'`
```

```
 --default-ulimit nofile=20480:40960 nproc=1024:2048
 --ulimit nofile=20480:40960 nproc=1024:2048
```

### 常用命令
```
查看目录占用空间
du -ah --max-depth=1
拷贝文件
kubectl cp -n kube-system skywalking-oap-rc-jg75t:config/application.yml ./
查看副本控制器
kubectl get rc -n kube-system
# 如果不加--cascade=false 那么就会连同pod 也一起删除 我这里这么删除是因为出现了顽固的无法界面删除影响ci
kubectl delete rc cloud-user-09eac -n kube-system 

yum list kubelet --showduplicates | sort -r 

调整副本数
kubectl scale --current-replicas=1 --replicas=2 deployment/kubernetes-dashboard -n kube-system
```
