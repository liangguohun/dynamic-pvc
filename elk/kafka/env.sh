#!/bin/sh

ZOOKEEPER_DATADIR=${ZOOKEEPER_DATADIR:-"/tmp/zookeeper"}

sed -i "s/^dataDir=.*$/dataDir=$ZOOKEEPER_DATADIR/" /var/app/config/zookeeper.properties

grep ^[^#] /var/app/config/server.properties > /var/app/config/new-server.properties
ADVERTISED_HOST_NAME=${KAFKA_ADVERTISED_HOST_NAME:-"127.0.0.1"}
echo "advertised.listeners=PLAINTEXT://${ADVERTISED_HOST_NAME}:9092" >> /var/app/config/new-server.properties
/var/app/bin/kafka-server-start.sh /var/app/config/new-server.properties
