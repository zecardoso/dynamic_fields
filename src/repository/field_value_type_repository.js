import { FieldValueType } from "../model/field_value_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FieldValueTypeRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_table", parameters)
    }
}