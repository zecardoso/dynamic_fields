import { FieldValueTypeResponse } from "../model/field_value_type_response.js"
import { FieldValueTypeRepository } from "../repository/field_value_type_repository.js"

export class FieldValueTypeService {
    #repository

    constructor() {
        this.#repository = new FieldValueTypeRepository()
    }

    async Get(id) {
        const fieldValueType = await this.#repository.Get(id)

        const fieldValueTypeResponse = new FieldValueTypeResponse()

        fieldValueTypeResponse.Set(fieldValueType)

        return fieldValueTypeResponse
    }
}