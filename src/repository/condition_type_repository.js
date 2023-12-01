import { ConditionType } from "../model/condition_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class ConditionTypeRepository {
    #integration

    constructor() {
        this.#integration = new DataBaseIntegration()
    }

    async Get(codeIdentifier) {
        const parameters = [
            { name: "code_identifier", value: codeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_condition_type", parameters)

        let conditionType = new ConditionType()

        if (recordSets === null) {
            return conditionType
        }

        const row = recordSets[0][0]

        conditionType.GetFromRow(row)

        return conditionType
    }
}