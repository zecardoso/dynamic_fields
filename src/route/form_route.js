import { FormController } from "../controller/form_controller.js"

export class FormRoute {
    #httpServer
    #formController

    constructor(httpServer) {
        this.#httpServer = httpServer
        this.#formController = new FormController()

        this.#RouteGetForm()
    }

    #RouteGetForm() {
        const method = "get"
        const url = "/api/form/:codeIdentifier"

        this.#httpServer.Register(method, url, this.#formController.GetForm)
    }
}