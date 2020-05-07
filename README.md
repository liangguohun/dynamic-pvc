# dynamic-pvc
## 模板生成k8s pvc 动态创建卷的模板

1、修改执行权限

chmod u+x init-pvc

2、初始化环境

./init-pvc -nfs.server 192.168.1.4 -nfs.path /data/nfs

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