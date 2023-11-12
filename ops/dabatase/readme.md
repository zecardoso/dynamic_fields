
# Run

```shell
docker run --name db_dynamic_fields -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=0#DynamicFields' -p 1433:1433 -v C:\dev\dynamic_fields\data:/var/opt/mssql/data -d mcr.microsoft.com/mssql/server:2022-latest
```

# Exec

```shell
docker exec -it db_dynamic_fields /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P '0#DynamicFields'
```