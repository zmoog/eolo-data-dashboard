# Eolo Data Dashboard

Display the usage of your Eolo quota with next reset date.

## Eolo API

Only when connected to the Internet with the Eolo ISP there is an API to get the current quota usage.

`https://care.ngi.it/ws/ws.asp?a=get.quota`


### Sample

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
