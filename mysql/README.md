# 配置调整

## 创建mysql 配置
kubectl create configmap mysql-conf --from-file=our-mysql.cnf

## 慢查询
SELECT SLEEP(5) FROM order_seq;

## 批量删除表
 ```
 kubectl exec -it pod名 /bin/sh
 mysql -uroot
 SELECT CONCAT('drop table ',table_name,';') FROM information_schema.`TABLES` WHERE table_schema='imshop_job';

复制到notepad++

ctl+alt+鼠标竖选
use db;
cp 执行
 ```

## 创建库及配置
```
CREATE DATABASE IF NOT EXISTS `cloud-activiti` DEFAULT CHARACTER SET = utf8mb4;
GRANT SELECT,INSERT,UPDATE,DELETE ON `cloud-activiti`.* TO hsteam2019@"%" IDENTIFIED BY "hg_jb_sl,mx.@=/66";
-- 补上建表授权
GRANT CREATE ON `cloud-activiti`.* TO hsteam2019@"%" IDENTIFIED BY "hg_jb_sl,mx.@=/66";
FLUSH  privileges;
-- 创建索引授权
GRANT INDEX ON `cloud-activiti`.* TO hsteam2019@"%" IDENTIFIED BY "hg_jb_sl,mx.@=/66";
FLUSH  privileges;
-- 修改表结构授权
GRANT ALTER ON `cloud-activiti`.* TO hsteam2019@"%" IDENTIFIED BY "hg_jb_sl,mx.@=/66";
FLUSH  privileges;
权限的说明
https://www.cnblogs.com/kcxg/p/11363008.html

```