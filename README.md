# Cenário node-mysql

Cenário para construção de aplicações utilizando node e mysql.

### 1º passo 
Realize um `clone` do repositório para a sua máquina local.

```bash
git clone <fork-link>
```
ou
```bash
git clone -b <nome-branch> <fork-link>
```
### 2º passo
Certifique-se de que tenha [docker](https://www.docker.com/get-started) instalado em sua máquina.

```bash
docker-compose build
```
Agora execute o seguinte comando para iniciar a docker.

use -d para poder continuar usando o mesmo terminal
```bash
docker-compose up -d
```
### 3º passo
Instale as dependência do node

```bash
npm install
```
Agora execute
```bash
npm start
```
Pronto! Agora basta acessar seu [localhost](http://localhost:3000/) e se divertir.
