FROM alpine:3.8

RUN adduser -D -S -h /home/gitlab-runner gitlab-runner

RUN apk add --no-cache \
    bash \
    ca-certificates \
    git \
    openssl \
    tzdata ;\
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime;
#   wget

#ARG DOCKER_MACHINE_VERSION
#ARG DUMB_INIT_VERSION

COPY gitlab-runner-linux-amd64 /usr/bin/gitlab-runner
#COPY checksums /tmp/
COPY docker-machine-Linux-x86_64 /usr/bin/docker-machine
COPY dumb-init_1.2.2_amd64 /usr/bin/dumb-init

RUN chmod +x /usr/bin/gitlab-runner && \
    ln -s /usr/bin/gitlab-runner /usr/bin/gitlab-ci-multi-runner && \
    gitlab-runner --version && \
    mkdir -p /etc/gitlab-runner/certs && \
    chmod -R 700 /etc/gitlab-runner

#    wget -q https://github.com/docker/machine/releases/download/v${DOCKER_MACHINE_VERSION}/docker-machine-Linux-x86_64 -O /usr/bin/docker-machine && \

RUN chmod +x /usr/bin/docker-machine && \
    docker-machine --version
 
#   wget -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 -O /usr/bin/dumb-init && \

RUN chmod +x /usr/bin/dumb-init && \
    dumb-init --version && \
    apk del tzdata
#   sha256sum -c -w /tmp/checksums

COPY entrypoint /
RUN chmod +x /entrypoint

VOLUME ["/etc/gitlab-runner", "/home/gitlab-runner"]
ENTRYPOINT ["/usr/bin/dumb-init", "/entrypoint"]
CMD ["run", "--user=gitlab-runner", "--working-directory=/home/gitlab-runner"]
