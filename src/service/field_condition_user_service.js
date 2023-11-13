import { FieldConditionUser } from "../model/field_condition_user.js"
import { FieldConditionUserRepository } from "../repository/field_condition_user_repository.js"

export class FieldConditionUserService {
    constructor() {
        this.repository = new FieldConditionUserRepository()
    }
}