# Eolo Data Dashboard

Display the usage of your Eolo quota with next reset date.

## Eolo API

Only when connected to the Internet with the Eolo ISP there is an API to get the current quota usage.

`https://care.ngi.it/ws/ws.asp?a=get.quota`




Call the API is really easy, it's just a `GET`:

```bash
$ curl https://care.ngi.it/ws/ws.asp\?a\=get.quota
```

And this is the response from the server:

```json

{
    "response": {
        "status": 200
    },
    "data": {
        "used": 31661257,
        "quota": 41943040,
        "nextReset": "2015-09-19 23:59:59"
    },
    "voice": {
        "credit": -9999
    }
}

```


## Docker

You can build a Docker image to run the application containerized:

```
$ docker build -t zmoog/eolo-data-dashboard:latest .
Sending build context to Docker daemon 32.22 MB
Step 0 : FROM java:8
 ---> 7547e52aac4b
Step 1 : VOLUME /tmp
 ---> Using cache
 ---> 22870bc0487a
Step 2 : ADD target/eolo-data-dashboard-0.0.1-SNAPSHOT.jar /app.jar
 ---> Using cache
 ---> 903d775e2990
Step 3 : ENTRYPOINT java -Djava.security.egd=file:/dev/.urandom -jar /app.jar
 ---> Using cache
 ---> d09e6236ded7
Successfully built d09e6236ded7

```

Run a container from the image we've built:

```
$ docker run -d -p 8080:8080 zmoog/eolo-data-dashboard:latest 
```

Wait a few seconds and the app will be available.
