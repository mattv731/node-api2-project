// require your server and launch it here
const server = ('./api/server.js')

const port = 9000

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})