const http =  require('http')
const port = 5000;



const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
})


const rotas = {
    "/teste" :"funcionou!"
}

server.listen(port, () => {
    console.log(`Inicou na porta : ${port}`)
})