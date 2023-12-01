import { ConditionTypeResponse } from "../model/condition_type_response.js"
import { ConditionTypeRepository } from "../repository/condition_type_repository.js"

export class ConditionTypeService {
    #repository

    constructor() {
        this.#repository = new ConditionTypeRepository()
    }

    async Get(codeIdentifier) {
        const conditionType = await this.#repository.Get(codeIdentifier)

        const conditionTypeResponse = new ConditionTypeResponse()

        conditionTypeResponse.Set(conditionType)

        return conditionTypeResponse
    }
}