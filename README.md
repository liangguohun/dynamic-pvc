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

---

### 查找可用镜像
./list_img_tags.sh gitlab/gitlabt-ce
