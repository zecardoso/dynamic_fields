import { ConditionTypeResponse } from "../model/condition_type_response.js"
import { ConditionTypeRepository } from "../repository/condition_type_repository.js"

export class ConditionTypeService {
    #repository

    constructor() {
        this.#repository = new ConditionTypeRepository()
    }

    async Get(id) {
        const conditionType = await this.#repository.Get(id)

        const conditionTypeResponse = new ConditionTypeResponse()

        conditionTypeResponse.Set(conditionType)

        return conditionTypeResponse
    }
}