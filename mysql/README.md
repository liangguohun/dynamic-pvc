# 配置调整

## 创建mysql 配置
kubectl create configmap mysql-conf --from-file=our-mysql.cnf

## 慢查询
SELECT SLEEP(5) FROM order_seq;

## 批量删除表
 ```
 kubect exec -it pod名 /bin/sh
 mysql -uroot
 SELECT CONCAT('drop table ',table_name,';') FROM information_schema.`TABLES` WHERE table_schema='imshop_job';

复制到notepad++

ctl+alt+鼠标竖选
use db;
cp 执行
 ```
