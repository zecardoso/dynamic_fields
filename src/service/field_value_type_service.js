import { FieldValueType } from "../model/field_value_type.js"
import { FieldValueTypeRepository } from "../repository/field_value_type_repository.js"

export class FieldValueTypeService {
    constructor() {
        this.repository = new FieldValueTypeRepository()
    }
}