import { Field } from "../model/field.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { ColumnRepository } from "./column_repository.js"
import { FieldConditionUserRepository } from "./field_condition_user_repository.js"

const UserTypeId = 1

export class FieldRepository {
    #integration
    #columnRepository
    #fieldConditionUserRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#columnRepository = new ColumnRepository()
        this.#fieldConditionUserRepository = new FieldConditionUserRepository()
    }

    async Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field", parameters)

        let field = new Field()

        if (recordSets === null) {
            return field
        }

        const row = recordSets[0][0]

        field.GetFromRow(row)

        await this.#SetFieldColumn(field, row)

        await this.#SetFieldConditions(field)

        return field
    }

    async #SetFieldColumn(field, row) {
        if (row["ColumnId"] !== undefined) {
            const columnId = row["ColumnId"]

            field.Column = await this.#columnRepository.Get(columnId)
        }
    }

    async #SetFieldConditions(field) {
        field.Conditions = await this.#fieldConditionUserRepository.Get(field.Id, UserTypeId)
    }
}