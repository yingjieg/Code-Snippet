### show volumnes for container

```sh
docker inspect -f '{{ .Mounts }}' containerid
```
