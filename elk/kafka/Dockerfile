FROM openjdk:8u151-jre-alpine 
#   借鉴 https://www.cnblogs.com/wunaozai/p/9985054.html
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache bash && rm -rf /var/cache/apk/* && /bin/bash

#   http://kafka.apache.org/downloads

RUN wget http://mirror.bit.edu.cn/apache/kafka/2.4.1/kafka_2.12-2.4.1.tgz && \
    tar -zxvf kafka_2.12-2.4.1.tgz && \
    rm -rf kafka_2.12-2.4.1.tgz && \
    mv kafka_2.12-2.4.1 /var/app/

ENV PATH /var/app/bin:$PATH

COPY env.sh /env.sh
RUN chmod +x env.sh

EXPOSE 9092 9192

ENTRYPOINT ["/env.sh"]
