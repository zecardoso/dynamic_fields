import { FormField } from "../model/form_field.js"
import { FormFieldRepository } from "../repository/form_field_repository.js"

export class FormFieldService {
    #repository

    constructor() {
        this.#repository = new FormFieldRepository()
    }

    async Get(id) {
        const formField = await this.#repository.Get(id)

        return formField
    }
}