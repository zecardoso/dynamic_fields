import { User } from "../model/user.js"
import { UserRepository } from "../repository/user_repository.js"

export class UserService {
    #repository

    constructor() {
        this.#repository = new UserRepository()
    }

    async Get(id) {
        const user = await this.#repository.Get(id)

        return user
    }
}