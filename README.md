# json-server-config

1. ter node instalado no pc
2. rodar comando: npm init -y
3. instalar o json-server: npm install json-server

## Criar a fake API
1. npx json-server -- watch database.json

## obs

*toda vez que nos alterarmos o arquivo database.json manualmente, temos que parar o comando no terminal e rodar novamente.

EX: rode o comando: 'CRTL + d' para parar o terminal e depois rode novamente o comando: npx json-server --watch database.json
ente o comando: npx json-server --watch database.json

* adicionar o arquivo .gitignore para adicionar a pasta node_modules
ex: no arquivo .gitignore, digite: node_modules/