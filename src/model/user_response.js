import { UserTypeResponse } from "./user_type_response.js"

export class UserResponse {
    constructor(CodeIdentifier, UserType, Name, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.UserType = UserType
        this.Name = Name
        this.Enabled = Enabled
    }

    Set(user) {
        this.CodeIdentifier = user.CodeIdentifier

        this.UserType = new UserTypeResponse()
        this.UserType.Set(user.UserType)

        this.Name = user.Name
        this.Enabled = user.Enabled
    }
}
