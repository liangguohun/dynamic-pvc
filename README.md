# dynamic-pvc
## 模板生成k8s pvc 动态创建卷的模板

1、修改执行权限

chmod u+x init-pvc

2、初始化环境

./init-pvc -nfs.server 192.168.1.4 -nfs.path /data/nfs

3、创建日常操作的pvc和pod(初始化后，没个新部署都这里一条命令ok)

kubectl delete -f test-pod.yaml -f test-claim.yaml

