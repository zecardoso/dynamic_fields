import { UserResponse } from "../model/user_response.js"
import { UserRepository } from "../repository/user_repository.js"

export class UserService {
    #repository

    constructor() {
        this.#repository = new UserRepository()
    }

    async Get(id) {
        const user = await this.#repository.Get(id)

        const userResponse = new UserResponse()

        userResponse.Set(user)

        return userResponse
    }
}