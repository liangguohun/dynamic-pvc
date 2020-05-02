FROM   quay.io/prometheus/busybox:latest
LABEL  maintainer="angguohun@qq.com"

ARG ARCH="amd64"
ARG OS="linux"

COPY /redis_exporter /redis_exporter

EXPOSE     9121
ENTRYPOINT [ "/redis_exporter" ]
