import { ConditionType } from "../model/condition_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class ConditionTypeRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_dynamic_field_condition_type", parameters)
    }
}