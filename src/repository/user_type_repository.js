import { UserType } from "../model/user_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class UserTypeRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_user_type", parameters)
    }
}