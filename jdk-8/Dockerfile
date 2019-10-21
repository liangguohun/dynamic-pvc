FROM maven:3.6.2-ibmjava-8-alpine


COPY settings.xml /usr/share/maven/conf/

RUN chmod u+x /usr/local/bin/mvn-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/mvn-entrypoint.sh"]
CMD ["mvn"]
