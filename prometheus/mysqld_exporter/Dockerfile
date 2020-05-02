FROM   quay.io/prometheus/busybox:latest
LABEL  maintainer="angguohun@qq.com"

ARG ARCH="amd64"
ARG OS="linux"
COPY /mysqld_exporter /bin/mysqld_exporter

USER        nobody
EXPOSE      9104
ENTRYPOINT  [ "/bin/mysqld_exporter" ]
