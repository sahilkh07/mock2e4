const jsonServer=require('json-server')

const server=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()


const PORT=process.env.PORT||3000

server.use(router)
server.use(middleware)

server.listen(PORT,()=>{
    console.log('Running')
})