### show volumnes for container

```sh
docker inspect -f '{{ .Mounts }}' containerid
```

### show ip for container

```sh
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' containerid
```
