FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Anke Stein <a.stein@posteo.de>

ADD backend/target/app.jar app.jar
CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]

