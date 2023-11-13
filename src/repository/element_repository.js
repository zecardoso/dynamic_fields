import { Element } from "../model/element.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class ElementRepository {
    constructor() {
        this.integration = new DataBaseIntegration();
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_dynamic_field_element", parameters);
    }
}