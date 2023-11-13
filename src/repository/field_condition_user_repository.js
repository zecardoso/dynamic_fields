import { FieldConditionUser } from "../model/field_condition_user.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class FieldConditionUserRepository {
    constructor() {
        this.integration = new DataBaseIntegration();
    }

    Get(field_id, user_type_id) {
        const parameters = [
            { name: "field_id", value: field_id },
            { name: "user_type_id", value: user_type_id }
        ]

        this.integration.Execute("get_dynamic_field_condition_user", parameters);
    }
}