# 配置调整

## 创建mysql 配置
kubectl create configmap mysql-conf --from-file=our-mysql.cnf

## 慢查询
SELECT SLEEP(5) FROM order_seq;
