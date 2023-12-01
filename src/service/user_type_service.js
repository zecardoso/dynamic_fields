import { UserTypeResponse } from "../model/user_type_response.js"
import { UserTypeRepository } from "../repository/user_type_repository.js"

export class UserTypeService {
    #repository

    constructor() {
        this.#repository = new UserTypeRepository()
    }

    async Get(codeIdentifier) {
        const userType = await this.#repository.Get(codeIdentifier)

        const userTypeResponse = new UserTypeResponse()

        userTypeResponse.Set(userType)

        return userTypeResponse
    }
}