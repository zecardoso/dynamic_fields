import { UserType } from "../model/user_type.js"
import { UserTypeRepository } from "../repository/user_type_repository.js"

export class UserTypeService {
    constructor() {
        this.repository = new UserTypeRepository()
    }
}