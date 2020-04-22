#!/bin/sh

BROKER_ID=${BRODER_ID:-"0"}
LISTENERS=${LISTENERS:-"PLAINTEXT://:9092"}
ZOOKEEPER_CONNECT=${ZOOKEEPER_CONNECT:-"localhost:2181"}
ZOOKEEPER_DATADIR=${ZOOKEEPER_DATADIR:-"/tmp/zookeeper"}

sed -i "s/^broker.id=.*$/broker.id=$BROKER_ID/" /var/app/config/server.properties
sed -i "s;^#listeners=.*$;listeners=$LISTENERS;g" /var/app/config/server.properties
sed -i "s/^zookeeper.connect=.*$/zookeeper.connect=$ZOOKEEPER_CONNECT/" /var/app/config/server.properties

sed -i "s/^dataDir=.*$/dataDir=$ZOOKEEPER_DATADIR/" /var/app/config/zookeeper.properties

sed -i "s#/tmp/kafka-logs#/data#g" /var/app/config/server.properties

/var/app/bin/kafka-server-start.sh /var/app/config/server.properties
