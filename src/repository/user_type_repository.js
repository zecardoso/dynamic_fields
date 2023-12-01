import { UserType } from "../model/user_type.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class UserTypeRepository {
    #integration

    constructor() {
        this.#integration = new DataBaseIntegration()
    }

    async Get(codeIdentifier) {
        const parameters = [
            { name: "code_identifier", value: codeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_user_type", parameters)

        let userType = new UserType()

        if (recordSets === null) {
            return userType
        }

        const row = recordSets[0][0]

        userType.GetFromRow(row)

        return userType
    }
}