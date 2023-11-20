import { ConditionType } from "../model/condition_type.js"
import { ConditionTypeRepository } from "../repository/condition_type_repository.js"

export class ConditionTypeService {
    #repository

    constructor() {
        this.#repository = new ConditionTypeRepository()
    }

    async Get(id) {
        const conditionType = await this.#repository.Get(id)

        return conditionType
    }
}