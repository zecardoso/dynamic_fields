import { Form } from "../model/form.js"
import { FormRepository } from "../repository/form_repository.js"

export class FormService {
    #repository

    constructor() {
        this.#repository = new FormRepository()
    }

    async Get(id) {
        const form = await this.#repository.Get(id)

        return form
    }
}