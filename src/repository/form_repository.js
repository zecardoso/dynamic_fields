import { Form } from "../model/form.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FormRepository {
    constructor() {
        this.integration = new DataBaseIntegration();
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_dynamic_field_form", parameters);
    }
}