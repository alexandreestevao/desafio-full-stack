## DESAFIO FULL STACK

Esse é um sistema de controle de fornecedores e empresas.

### `BACKEND`

Utilizado o framework Spring na camada backend.

JDK na versão 11.

Integração com os bancos de dados H2:

H2 - roperties test<br />
Postgres - properties dev e prod.


### `FRONTEND`

Utilizado o framework React na camada fronend.

NPM version 9.6.6<br />
$ npm --version<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `INSTALL`

Clonar o projeto no git:<br />
$ git clone https://github.com/alexandreestevao/desafio-full-stack.git

`BACKEND`<br />

Baixar e configurar o JDK 11 nas variáveis de ambientes do sistema operacional.<br /><br />
Exemplo:<br /><br />
Variable name: JAVA_HOME<br />
Variable value: C:\Program Files\Java\jdk-11<br /><br />

Variable name: Path<br />
Variable value: %JAVA_HOME%\bin<br />

Importar (import Maven) a pasta backend na sua IDE de preferência.<br />

Atualizar as dependências.<br />

No projeto tem o arquivo "src/main/resources/`import.sql`" com uma carga inicial. Caso não deseja ter uma importação inicial, basta remover o arquivo.

`FRONTEND`<br />
Importar/abrir a pasta frontend na sua IDE de preferência.<br />

Contando que o Node(npm) já esteja instalado Instalar as dependências na pasta raiz frontend:<br />
$ npm install<br /><br />

Após a instalação, executar o frontend:<br />
$ npm start

