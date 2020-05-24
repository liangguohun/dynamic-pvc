FROM alpine:3.8

LABEL MAINTAINER = 'liangguohun@qq.com(https://github.com/liangguohun)'

ARG KUBE_LATEST_VERSION=v1.13.0

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

# RUN apk add --update ca-certificates
RUN apk update 
RUN apk add --no-cache curl
RUN curl -L http://storage.googleapis.com/kubernetes-release/release/${KUBE_LATEST_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
  && chmod +x /usr/local/bin/kubectl

RUN rm -rf /var/cache/apk/*

