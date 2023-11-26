import express from "express"

export class Express {
    #app

    constructor() {
        this.#app = express()
        this.#app.use(express.json())
    }

    Register(method, url, callback) {
        this.#app[method](url, async function(req, res) {
            const output = await callback(req.params, req.body)

            res.json(output)
        })
    }

    Listen(port) {
        this.#app.listen(port)
    }
}