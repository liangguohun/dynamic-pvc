FROM mongo:4.2.0-bionic

COPY mongod.conf /
RUN chmod 777 mongod.conf

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 27017
CMD ["mongod","--config","mongod.conf"]
