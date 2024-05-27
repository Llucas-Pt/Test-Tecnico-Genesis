<h1>INSTALAÇÃO E CONFIGURAÇÃO PARA FUNCIONAMENTO DO CÓDIGO</h1>

<h2>#Instale o Node.js:</h2>

<p>Baixe e instale a versão mais recente do Node.js: https://nodejs.org/en</p>

<h2>#Instale os seguintes pacotes:</h2>

<p>npm install express sequelize sqlite3 express-xml-bodyparser</p>
<p>npm install --save-dev nodemon</p>

<h2>#Instale o SQLiteStudio:</h2>

<p>Para visualizar e interagir com o banco de dados SQLite, baixe e instale o SQLiteStudio</p>
<p>Site Oficial: https://sqlitestudio.pl/</p>

<br>
<br>

<h1>MANUAL DE USO</h1>

<h2>#Inicie o servidor:</h2>
<p>Execute o comando: "npm run dev" ou "node ./Servidor"</p>

<h2>#Acesse o site HTML:</h2>
<p>Abra o navegador e acesse: http://localhost:3001/Cadastro.html</p>

<h2>#Abra o SQLiteStudio:</h2>
<p>No diretório raiz, abra o arquivo "database.sqlite" utilizando o SQLiteStudio.</p>

<br>
<br>

<h1>PROCESSO DE USO</h1>

<h2>#Preencha o formulário:</h2>
<p>Preencha todos os campos do formulário, incluindo Nome do Paciente, Data de Nascimento, Sexo e a Data das Últimas Visitas.</p>

<h2>#Enviar os dados:</h2>
<p>Após preencher todos os campos, clique em "Inserir" para enviar a requisição POST ao servidor.</p>

<h2>#Verificar os dados no SQLiteStudio:</h2>
<p>Abra o SQLiteStudio.</p>
<p>Conecte-se ao banco de dados database.sqlite que está no diretório do projeto.</p>
<p>Execute uma consulta na tabela Pacientes para verificar se os dados foram inseridos corretamente.</p>


![Captura de tela de 2024-05-26 20-26-49](https://github.com/Llucas-Pt/Test-Tecnico-Genesis/assets/108191836/79ebcb1c-8180-4c66-baf7-b3625dfe9759)
