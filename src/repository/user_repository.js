import { User } from "../model/user.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class UserRepository {
    constructor() {
        this.integration = new DataBaseIntegration();
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_user", parameters);
    }
}