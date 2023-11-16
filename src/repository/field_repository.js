import { Field } from "../model/field.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FieldRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_dynamic_field", parameters)
    }
}