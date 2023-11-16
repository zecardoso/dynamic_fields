import { FormField } from "../model/form_field.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FormFieldRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(form_id) {
        const parameters = [
            { name: "form_id", value: form_id }
        ]

        this.integration.Execute("get_dynamic_field_form_field", parameters)
    }
}