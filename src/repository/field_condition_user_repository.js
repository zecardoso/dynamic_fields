import { FieldConditionUser } from "../model/field_condition_user.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { UserTypeRepository } from "./user_type_repository.js"
import { ConditionTypeRepository } from "./condition_type_repository.js"

export class FieldConditionUserRepository {
    #integration
    #userTypeRepository
    #conditionTypeRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#userTypeRepository = new UserTypeRepository()
        this.#conditionTypeRepository = new ConditionTypeRepository()
    }

    async Get(fieldCodeIdentifier, userTypeCodeIdentifier) {
        const parameters = [
            { name: "field_code_identifier", value: fieldCodeIdentifier },
            { name: "user_type_code_identifier", value: userTypeCodeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_condition_user", parameters)

        let fieldConditionsUser = []

        if (recordSets === null) {
            return fieldConditionsUser
        }

        const rows = recordSets[0]

        for (const row of rows) {
            let fieldConditionUser = new FieldConditionUser()

            fieldConditionUser.GetFromRow(row)

            await this.#SetFieldConditionUserUserType(fieldConditionUser, row)

            await this.#SetFieldConditionUserConditionType(fieldConditionUser, row)

            fieldConditionsUser.push(fieldConditionUser)
        }

        return fieldConditionsUser
    }

    async #SetFieldConditionUserUserType(fieldConditionUser, row) {
        if (row["UserTypeCodeIdentifier"] !== undefined) {
            const userTypeCodeIdentifier = row["UserTypeCodeIdentifier"]

            fieldConditionUser.UserType = await this.#userTypeRepository.Get(userTypeCodeIdentifier)
        }
    }

    async #SetFieldConditionUserConditionType(fieldConditionUser, row) {
        if (row["ConditionTypeCodeIdentifier"] !== undefined) {
            const conditionTypeCodeIdentifier = row["ConditionTypeCodeIdentifier"]

            fieldConditionUser.ConditionType = await this.#conditionTypeRepository.Get(conditionTypeCodeIdentifier)
        }
    }
}