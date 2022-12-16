<h1>Books and Reviews API - Node Express API</h1>

<p>Esse é o repositório para o back-end do projeto Books and Reviews.</p>
<p>Foi criada uma API Rest com Node Express.</p>

<h2>Tecnologias utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Mongoose (mongoDB)</li>
</ul>

<h2>Estrutura do projeto</h2>

<p>A estrutura de pastas do projeto é explicada a seguir:</p>

<table border="1" >
  <thead align="left">
    <tr>
      <th> Nome </th>
      <th> Descrição </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <strong>app.ts</strong> </td>
      <td> Entrada da aplicação, contém as rotas e conexão ao banco de dados. </td>
    </tr>
    <tr>
      <td> <strong>node_modules</strong> </td>
      <td> Contém todas as dependências npm </td>
    </tr>
    <tr>
      <td> <strong>src </strong></td>
      <td> Contém os diretórios src/__tests__, src/books, src/db, src/reviews e src/utils </td>
    </tr>
    <tr>
      <td><strong> src/db </strong></td>
      <td> Contém o diretório db/seeder e os arquivos:<br>
           mongo.connection.ts (para acessar o dotenv e fazer a conexão e desconexão do banco de dados)<br>
           e mongo.seeder.ts (chama a função seeder)
      </td>
    </tr>
    <tr>
      <td> <strong>src/db/seeder</strong> </td>
      <td> Contém o diretório seeder/__mocks__ e o arquivo seeder.ts (para realizar um processo de seeding inicial) </td>
    </tr>
    <tr>
      <td><strong> src/db/seeder/__mocks__</strong> </td>
      <td> Contém os arquivos:<br>
           books.seeder.ts (cria um novo book)
           e reviews.seeder.ts(cria um novo review)
      </td>
    </tr>
    <tr>
      <td>---------------------------</td>
      <td>---------------------------------------------------------------------------------------------------------------------</td>
    </tr>
    <tr>
      <td><strong> **src/books ** </strong></td>
      <td> Contém todo o domínio de books com seus respectivos:<br> controllers, models, repositories, services, factory, routes, __mocks__ e utils.</td>
    </tr>
    <tr>
      <td> <strong>src/books/__mocks__ </strong></td>
      <td> Contém todos os mocks da entidade books.</td>
    </tr>
    <tr>
      <td> <strong>src/books/controllers </strong></td>
      <td> Contém o controller de books com os métodos: getAll, getById, create, update e updateStatus.<br>
         Acompanha arquivo de testes de controller.</td>
    </tr>
    <tr>
      <td> <strong>src/books/factories </strong></td>
      <td> Contém função booksFactory, responsável por instanciar repository, service e controller.<br>
         Acompanha arquivo de testes de factory.</td>
    </tr>
    <tr>
      <td> <strong>src/books/models </strong></td>
      <td> Contém o Schema para a model de books e cria Model da aplicação.<br>
         Acompanha arquivo de testes de models.</td>
    </tr>
    <tr>
      <td> <strong>src/books/repository</strong> </td>
      <td> Contém classe BooksRepository: repositório com os métodos getAll, getById, create, update e updateStatus.<br>
         Acompanha arquivo de testes de repository.</td>
    </tr>
    <tr>
      <td> <strong>src/books/service</strong></td>
      <td> Contém classe BooksService: serviço com os métodos getAll, getById, create, update e updateStatus.<br>
        Acompanha arquivo de testes de service.</td>
    </tr>
    <tr>
      <td> <strong>src/books/routes</strong>	</td>
      <td> Contém todas as rotas de requisiçoes de books</td>
    </tr>
    <tr>
      <td><strong> src/books/utils	</strong></td>
      <td> Contém 1 arquivo: <br>
      books.body.validator.ts (para validar os body's de books). <br>
       Acompanha arquivo de testes de bodyValidator.</td>
    </tr>
    <tr>
      <td>---------------------------</td>
      <td>---------------------------------------------------------------------------------------------------------------------</td>
    </tr>
    <td> <strong>**src/reviews **</strong> </td>
      <td> Contém todo o domínio de reviews com seus respectivos:<br> controllers, models, repositories, services, factory, routes, __mocks__ e utils.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/__mocks__ </strong></td>
      <td> Contém todos os mocks da entidade reviews.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/controllers</strong> </td>
      <td> Contém o controller de reviews com os métodos: getAll, getById, create e update.<br>
         Acompanha arquivo de testes de controller.</td>
    </tr>
    <tr>
      <td> <strong>src/reviews/factories </strong></td>
      <td> Contém função reviewsFactory, responsável por instanciar repository, service e controller.<br>
         Acompanha arquivo de testes de factory.</td>
    </tr>
    <tr>
      <td> <strong>src/reviews/models </strong></td>
      <td> Contém o Schema para a model de reviews e cria Model da aplicação.<br>
         Acompanha arquivo de testes de models.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/repository</strong> </td>
      <td> Contém classe ReviewsRepository: repositório com os métodos getAll, getById, create e update.<br>
         Acompanha arquivo de testes de repository.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/service</strong>	</td>
      <td> Contém classe ReviewsService: serviço com os métodos getAll, getById, creat e update.<br>
         Acompanha arquivo de testes de service.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/routes	</strong></td>
      <td> Contém todas as rotas de requisiçoes de reviews</td>
    </tr>
    <tr>
      <td><strong> src/reviews/utils</strong>	</td>
      <td> Contém 1 arquivo: <br>
        review.body.validator.ts (para validar os body's de reviews).<br>
         Acompanha arquivo de testes de bodyValidator.</td>
    </tr>
    <tr>
      <td>---------------------------</td>
      <td>---------------------------------------------------------------------------------------------------------------------</td>
    </tr>
    <tr>
      <td><strong> package.json</strong>	</td>
      <td> Contém todas as dependências instaladas assim como os scripts da aplicação e bibliotecas</td>
    </tr>
    <tr>
      <td><strong> src/utils</strong>	</td>
      <td> Contém 3 arquivos: <br>
        1. error.handler.ts (para validar error's). Acompanha arquivo de teste.  <br>
        2. status.code.ts (para concentrar os status e mensagens da aplicação).<br>
         Acompanha arquivo de teste. <br>
        3. id.validator.ts (para validar ID).<br>
        Acompanha arquivo de teste.
      </td>
    </tr> 
    <tr>
      <td><strong> src/__tests__</strong>	</td>
      <td> Contém 1 arquivo: <br>
        1. integration.review.spec.ts (para fazer teste de integração de todos os metodos da aplicação). <br>
      </td>
    </tr> 
  </tbody>
</table>

<h2>Pré-requisitos</h2>
<ul>
  <li>É esperado que o Node.js esteja instalado.</li>
  <li>Na raiz no projeto, crie um arquivo .env, adicione sua string de conexão do MongoDB à chave MONGO, como demonstrado a seguir:</li>
</ul>
<strong>MONGO =</strong>" <sua-string-de-conexão>"

<h3>Instalação</h3>
<h4>Instale as dependências:</h4>
npm install
<h4>Rode o script de seed:</h4>
npm run seed
<h4>Rode o script para rodar localmente:</h4>
npm run dev
<h3>Rodando os testes</h3>
<h4>Para executar os testes, rode o script:</h4>
npm test
<h4>Para visualizar a cobertura de testes da aplicação, use o script:</h4>
npm run coverage
<h2>Quantidade de testes realizados e cobertura da aplicação:</h2>

  ![cobertura-do-coverage](https://user-images.githubusercontent.com/107007341/208202591-1f595855-1294-4c21-8d2a-e2f2671a9d82.jpg)

<h2>Como usar os endpoints</h2>

<table border="1" >
  <thead align="left">
    <tr>
      <th> Endpoint </th>
      <th> Input </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <strong>GET /books</strong> </td>
      <td> Não é necessário input, retornará todos os books </td>
    </tr>
    <tr>
      <td> <strong>GET /books/:id	</strong> </td>
      <td> Necessário indicar id válido nos parâmetros da rota, retorna o book com o id selecionado. </td>
    </tr>
    <tr>
      <td> <strong>POST /books	</strong> </td>
      <td> Necessário informar JSON válido<br>
      exemplo: <br>
        { <br>
          title: "Harry Potter e o Prisioneiro de Askaban",<br>
          releaseDate: "1999",<br>
          language: ['português', 'inglês'],
          status: true,<br>
          reviewId: new mongoose.Types.ObjectId(),<br>
          author: "J. K. Rowling", <br>
          }<br> 
          retornará a postagem criada.<br>
          Observação: a chave "reviewId" não é obrigatória para criar um book. </td>
    </tr>
    <tr>
      <td> <strong>PUT /books/:id	</strong> </td>
      <td> Necessário indicar id válido nos parâmetros da rota e qual chave deseja alterar<br> ( language, reviewId ). </td>
    </tr>
    <tr>
      <td> <strong>PUT /books/:id/status	</strong> </td>
      <td> Necessário indicar id válido nos parâmetros da rota e a chave (status). </td>
    </tr>
    <tr>
      <td>-----------------------</td>
      <td>-------------------------------------------------------------------------------------------------------------------------</td>
    </tr>
    <tr>
      <td> <strong>GET /reviews</strong> </td>
      <td> Não é necessário input, retornará todas os reviews </td>
    </tr>
    <tr>
      <td> <strong>GET /reviews/:id	</strong> </td>
      <td> Necessário indicar id válido nos parâmetros da rota, retorna o post com o id selecionado. </td>
    </tr>
    <tr>
      <td> <strong>POST /reviews	</strong> </td>
      <td> Necessário informar JSON válido<br>
      exemplo: <br>
        { <br>
          title: "review Harry Potter e a Pedra Filosofal",<br>
          textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore."],<br>
          updateDate: [new Date()],<br>
          score: 3,<br>
        },<br> 
          retornará a postagem criada.<br>
    </tr>
    <tr>
      <td> <strong>PUT /reviews/:id	</strong> </td>
      <td> Necessário indicar id válido nos parâmetros da rota e qual chave deseja alterar ( textReview, updateDate ). </td>
    </tr>
  </tbody>
</table>
