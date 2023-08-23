//Imports
const express = require('express')
const axios = require('axios')


/* 
app = application 
inicializando o express dentro da constante app
*/
const app = express()

/* 
Server

- pode ser utilizado em outro arquivo próprio para server
- listen fica ouvindo o navegador 
- quando escuta a "porta 3000" ele joga no navegador
- Sempre utilizar "node . " no terminal 
- Para finalizar, utilizar ctrl + c
*/
app.listen('3000')


/* 
Middleware

- sempre usar quando tiver um body
- quando manda alguma coisa do insomnia pra ca, primeiro ele
vai passar pelo middleware e depois vai executar o que precisa
executar
- procurando a rota "/"
- procutar o post
- depois que passar pelo middleware, faz o restante

usar método use (express)
passar a instrução que transforme tudo em JSON
- usar o express cru, não o inicializado
*/
app.use(express.json())


/* 
Rota Get

- navegador só entende a rota get (pegar)
- routas são os caminhos que o site vai fazer 
- em rotes, sempre recebe argumentos (req, res)
- utilizar estrutura arrow function ( => ) para passar dados
- req ou requisição : é o que vem na rota junto 
- res ou resposta : é o que vamos responder para o navegador
- Exemplo de como colocar outra rota tbm



app.route('/').get( (req, res) => res.send("Hello World") )
app.route('/sobre').get( (req, res) => res.send("Aloha") )
*/


/* 
Rota Post

- mandar informações de fora para dentro da API
- tudo o que enviado do post é recebido no req
- buscar o corpo da requisição e exibir no terminal o que foi enviado
- navegador não consegue fazer o .post (apenas o .get)
- UTILIZAR O INSOMNIA
- criar a rota Post no insomnia e passar dados em JSON
- quando recebe dado na API, precisa mostrar que é um JSON

Mostrando na resposta da API, o conteúdo
- resposta dentro do insomnia.
- res.send (enviar na resposta)
- req.body (pega o corpo da requisição e envia para o send)



app.route('/').post( (req,res) => console.log(req.body) )
app.route('/').post( (req,res) => res.send(req.body) )
*/


/*
Rota Put

- recebe informações
- editar informações no código
- criar variável de exemplo
- utilizar "{}" no put para receber conteúdo
- variável "author" recebendo o que vem do "req.body" do put
- sempre utilizar o middleware
*/

/* variável */
let author = "Gabriel"


/* 
rota get para observar o que tinha antes da mudança 
- mostra no insomnia o que author



app.route('/').get( (req,res ) => res.send(author) )
*/

/* 
altera o valor da variável 
- fazendo o "author" receber apenas o conteúdo ( sem {} ) e 
não a estrutura toda JSON
- guarda apenas o conteúdo



app.route('/').put( (req,res) =>  {
    author = req.body.author
    res.send(author)
})
*/


/*
Parametros na requisição
- passar informações para o código que não estavam antes
- requisição é requisitar coisas da API
- Ex: navegador e digitar "localhost:3000/?name=Gabriel"
- Ex: digitar coisa qualquer "localhost:3000/ola alunos"
- da para passar informações pelo body em JSON (insomnia)
*/


/*
Tipo Body
- uma forma de enviar informações para a API e não ficam
na URL
- as informações serão enviadas pelo body, corpo
da requisição (escondidas)
- usar JSON
- Pode receber o body pelo Post, Put e Patch (três verbos que
aceita o body)
- usando "(req.body.nome)", ele retorna apenas o nome ou 
outro atributo que está no body
- mostrando como retornar mais de um, desmembrando o que tem
dentro do "req.body" usando as mesmas palavras criadas no JSON
- usando template string para passar todas as infos corretas
- forma de escrever html e javascript de forma fácil
- usar as crazes (``)



app.route('/').post( (req,res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
} )
app.route('/').post( (req,res) => {
    const {nome, cidade, carros_favoritos} = req.body
    res.send(carros_favoritos)
} )
*/


/* 
Tipo Route 

- enviar informações através da rota
- tudo o que vier após o "/" no código, vai virar uma variável
- pode ser chamada de qualquer coisa
- res.send da um "print" e envia como resposta no insomnia
- precisa ter uma outra rota apernas com "/" para satisfazer
a rota sem os parâmetros
- sempre que tiver um "/", vai entender que é outra rota

Três rotas separadas
- Primeira: não tem route params
- Segunda: tem o route params logo após o "/" (barra)
- Terceira: só será chamava quando após o "/" tiver a palavra
"identidade" e depois tudo o que tiver após "/:" vai virar uma
variável.



app.route('/').get( (req,res) => res.send("oi") )
app.route('/:variavel').get( (req,res) => res.send(req.params.variavel) )
app.route('/identidade/:nome').get( (req,res) => res.send(req.params.nome) )
*/

/* 
Tipo Query

- Query Params é uma forma que eu posso mandar parametros pra
dentro da URL de acordo com variáveis que eu crio diretamente
na requisição. Não preciso criar no "app.route("/")"
- deixando apenas a barra
- passar parametros atraves da URL
- são identificados na URL com o "?"
- toda vez que tiver uma interrogação, pode colocar a variavel
que eu definir
- Ex: localhost:3000?nome=aloha
- pode colocar várias variáveis utilizando o "e comercial (&)"
- Ex: Ex: localhost:3000?nome=aloha&cidade=honolulu
- mostrar no "res.send" o "req.query"
- é possível mostrar apenas o conteúdo de "nome" usando (req.query.nome)
- da pra emendar o "req.query" no "/" (barra)

Testando no Insomnia 
- localhost:3000/about/user?id=0987654&nome=Aloha&cidade=Honolulu
- pode filtrar tbm: "(req.query.id)" ou outra variável desejável



app.route("/").get( ( req,res) => res.send(req.query ) )
app.route("/").get( ( req,res) => res.send( req.query.nome ) )
app.route("/about/user").get( ( req,res) => res.send( req.query ) )
*/













/* 
Consumindo api do GitHub com Axios
- criar nova request no Insomnia (Users)
- colocar a url localhost:3000
- mostrando informações publicas do perfil
- quando der send na url com get (insomnia), ele retorna as 
informações publicas de perfil do github

Instalar o axios
- npm i axios 

.then() - deu tudo certo
.catch() - deu algum erro
o ".data" é onde está a resposta da url do github



app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/bielzfreitas')
    .then(result => res.send(result.data))
    .catch(error => console.erros(error))
})



Mostrando url da foto
- pode ser usado para qualquer um, não só a foto
- Ex: "id"

app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/bielzfreitas')
    .then(result => res.send(result.data.avatar_url))
    .catch(error => console.erros(error))
})



Mostrando como aparacer a própria foto e não a URL
- usar um template string

app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/bielzfreitas')
    .then(result => res.send(`<img src"${result.data.avatar_url}"/>`))
    .catch(error => console.erros(error))
})
*/