from java:8
VOLUME /tmp
ADD target/eolo-data-dashboard-0.0.1-SNAPSHOT.jar /app.jar
# RUN bash -x 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/.urandom","-jar","/app.jar"]
