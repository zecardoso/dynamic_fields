import { Express } from "../library/express.js"

export class HttpServerIntegration {
    #httpServer

    constructor(port) {
        this.#httpServer = new Express()
        this.#httpServer.Listen(port)
    }

    Register(method, url, callback) {
        this.#httpServer.Register(method, url, callback)
    }
}