## 构建镜像
docker build -t 192.168.1.4:5000/verynginx-alpine:v0.3.3.1 .
## 发布镜像
docker push 192.168.1.4:5000/verynginx-alpine:v0.3.3.1 
## 创建配置
create configmap nginx-base --from-file=nginx.conf
## 访问路径
http://192.168.1.4/verynginx/index.html 账号密码verynginx/verynginx