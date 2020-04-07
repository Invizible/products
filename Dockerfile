FROM openjdk:8

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN ./mvnw clean package

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar", "--spring.profiles.active=prod"]
