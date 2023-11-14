## Build Spring Boot
FROM maven:3.9.0-eclipse-temurin-19 AS springboot

WORKDIR /app

## build
COPY mvnw .
COPY mvnw.cmd .
COPY pom.xml .
COPY src ./src

RUN mvn package -Dmaven.test.skip=true

# Copy the final Jar file
FROM eclipse-temurin:19-jre

WORKDIR /app

COPY --from=springboot /app/target/server-0.0.1-SNAPSHOT.jar server.jar

## run
ENV PORT=8080

EXPOSE ${PORT}

ENTRYPOINT java -Dserver.port=${PORT} -jar server.jar