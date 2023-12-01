import { User } from "../model/user.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { UserTypeRepository } from "./user_type_repository.js"

export class UserRepository {
    #integration
    #userTypeRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#userTypeRepository = new UserTypeRepository()
    }

    async Get(codeIdentifier) {
        const parameters = [
            { name: "code_identifier", value: codeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_user", parameters)

        let user = new User()

        if (recordSets === null) {
            return user
        }

        const row = recordSets[0][0]

        user.GetFromRow(row)

        await this.#SetUserUserType(user, row)

        return user
    }

    async #SetUserUserType(user, row) {
        if (row["UserTypeCodeIdentifier"] !== undefined) {
            const userTypeCodeIdentifier = row["UserTypeCodeIdentifier"]

            user.UserType = await this.#userTypeRepository.Get(userTypeCodeIdentifier)
        }
    }
}