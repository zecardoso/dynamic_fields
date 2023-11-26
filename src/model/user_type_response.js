export class UserTypeResponse {
    constructor(CodeIdentifier, Description, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Enabled = Enabled
    }

    Set(userType) {
        this.CodeIdentifier = userType.CodeIdentifier
        this.Description = userType.Description
        this.Enabled = userType.Enabled
    }
}
