import { FormFieldResponse } from "../model/form_field_response.js"
import { FormFieldRepository } from "../repository/form_field_repository.js"

export class FormFieldService {
    #repository

    constructor() {
        this.#repository = new FormFieldRepository()
    }

    async Get(formCodeIdentifier) {
        const formField = await this.#repository.Get(formCodeIdentifier)

        const formFieldResponse = new FormFieldResponse()

        formFieldResponse.Set(formField)

        return formFieldResponse
    }
}