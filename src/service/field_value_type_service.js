import { FieldValueType } from "../model/field_value_type.js"
import { FieldValueTypeRepository } from "../repository/field_value_type_repository.js"

export class FieldValueTypeService {
    #repository

    constructor() {
        this.#repository = new FieldValueTypeRepository()
    }

    async Get(id) {
        const fieldValueType = await this.#repository.Get(id)

        return fieldValueType
    }
}