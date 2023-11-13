import { ConditionType } from "../model/condition_type.js"
import { ConditionTypeRepository } from "../repository/condition_type_repository.js"

export class ConditionTypeService {
    constructor() {
        this.repository = new ConditionTypeRepository()
    }
}