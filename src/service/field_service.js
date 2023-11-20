import { Field } from "../model/field.js"
import { FieldRepository } from "../repository/field_repository.js"

export class FieldService {
    #repository

    constructor() {
        this.#repository = new FieldRepository()
    }

    async Get(id) {
        const field = await this.#repository.Get(id)

        return field
    }
}