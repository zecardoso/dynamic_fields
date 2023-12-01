import { FieldConditionUserResponse } from "../model/field_condition_user_response.js"
import { FieldConditionUserRepository } from "../repository/field_condition_user_repository.js"

export class FieldConditionUserService {
    #repository

    constructor() {
        this.#repository = new FieldConditionUserRepository()
    }

    async Get(fieldCodeIdentifier, userTypeCodeIdentifier) {
        const fieldConditionUser = await this.#repository.Get(fieldCodeIdentifier, userTypeCodeIdentifier)

        const fieldConditionUserResponse = new FieldConditionUserResponse()

        fieldConditionUserResponse.Set(fieldConditionUser)

        return fieldConditionUserResponse
    }
}