module.exports = async function (fastify) {
    fastify.post('/sniphook', async (req,reply) => {
        console.log(req.data)
        reply.send(req.data)
    })
}