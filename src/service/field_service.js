import { FieldResponse } from "../model/field_response.js"
import { FieldRepository } from "../repository/field_repository.js"

export class FieldService {
    #repository

    constructor() {
        this.#repository = new FieldRepository()
    }

    async Get(codeIdentifier) {
        const field = await this.#repository.Get(codeIdentifier)

        const fieldResponse = new FieldResponse()

        fieldResponse.Set(field)

        return fieldResponse
    }
}