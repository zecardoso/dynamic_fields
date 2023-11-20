import { FieldConditionUser } from "../model/field_condition_user.js"
import { FieldConditionUserRepository } from "../repository/field_condition_user_repository.js"

export class FieldConditionUserService {
    #repository

    constructor() {
        this.#repository = new FieldConditionUserRepository()
    }

    async Get(id) {
        const fieldConditionUser = await this.#repository.Get(id)

        return fieldConditionUser
    }
}