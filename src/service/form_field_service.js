import { FormFieldResponse } from "../model/form_field_response.js"
import { FormFieldRepository } from "../repository/form_field_repository.js"

export class FormFieldService {
    #repository

    constructor() {
        this.#repository = new FormFieldRepository()
    }

    async Get(id) {
        const formField = await this.#repository.Get(id)

        const formFieldResponse = new FormFieldResponse()

        formFieldResponse.Set(formField)

        return formFieldResponse
    }
}