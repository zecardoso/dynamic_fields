import { FormResponse } from "../model/form_response.js"
import { FormRepository } from "../repository/form_repository.js"

export class FormService {
    #repository

    constructor() {
        this.#repository = new FormRepository()
    }

    async Get(codeIdentifier, userTypeCodeIdentifier) {
        const form = await this.#repository.Get(codeIdentifier, userTypeCodeIdentifier)

        const formResponse = new FormResponse()

        formResponse.Set(form)

        return formResponse
    }
}