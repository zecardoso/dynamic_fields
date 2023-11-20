import { FieldValueType } from "../model/field_value_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FieldValueTypeRepository {
    #integration

    constructor() {
        this.#integration = new DataBaseIntegration()
    }

    async Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_value_type", parameters)

        let fieldValueType = new FieldValueType()

        if (recordSets === null) {
            return fieldValueType
        }

        const row = recordSets[0][0]

        fieldValueType.GetFromRow(row)

        return fieldValueType
    }
}