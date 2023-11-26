export class ConditionTypeResponse {
    constructor(CodeIdentifier, Description, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Enabled = Enabled
    }

    Set(conditionType) {
        this.CodeIdentifier = conditionType.CodeIdentifier
        this.Description = conditionType.Description
        this.Enabled = conditionType.Enabled
    }
}
