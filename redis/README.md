
# 单机部署
docker run -it --name redis -e TZ=Asia/Shanghai -v $PWD/redis.conf:/usr/local/etc/redis/ -v $PWD/data:/data -p 7801:6379 -d redis:7.0.5-alpine3.16
