import { UserType } from "../model/user_type.js"
import { UserTypeRepository } from "../repository/user_type_repository.js"

export class UserTypeService {
    #repository

    constructor() {
        this.#repository = new UserTypeRepository()
    }

    async Get(id) {
        const userType = await this.#repository.Get(id)

        return userType
    }
}