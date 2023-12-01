import { UserResponse } from "../model/user_response.js"
import { UserRepository } from "../repository/user_repository.js"

export class UserService {
    #repository

    constructor() {
        this.#repository = new UserRepository()
    }

    async Get(codeIdentifier) {
        const user = await this.#repository.Get(codeIdentifier)

        const userResponse = new UserResponse()

        userResponse.Set(user)

        return userResponse
    }
}