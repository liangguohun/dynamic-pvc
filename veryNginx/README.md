## 构建镜像
docker build -t 192.168.1.4:5000/verynginx-alpine:v0.3.3.1 .
## 发布镜像
docker push 192.168.1.4:5000/verynginx-alpine:v0.3.3.1 
## 创建配置
create configmap nginx-base --from-file=nginx.conf
## 访问路径
http://192.168.1.4/verynginx/index.html 账号密码verynginx/verynginx

## 单机版启动
```
docker run --name verynginx -it -e TZ=Asia/Shanghai -p 8888:8888 \
-v $PWD/nginx.conf:/opt/verynginx/openresty/nginx/conf/nginx.conf \
-v $PWD/nginx-conf:/etc/nginx/conf.d/ \
-v $PWD/verynginx-cfg:/opt/verynginx/verynginx/configs/ \
-v $PWD/nginx:/var/nginx/ \
-d verynginx-alpine:v0.3.3.1
```
## 修改默认管理员

复制 菜单下config>all configuration 配置写到verynginx-cfg/config.json
里头修改默认账号
