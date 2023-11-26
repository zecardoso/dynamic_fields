export class FieldValueTypeResponse {
    constructor(CodeIdentifier, Description, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Enabled = Enabled
    }

    Set(fieldValueType) {
        this.CodeIdentifier = fieldValueType.CodeIdentifier
        this.Description = fieldValueType.Description
        this.Enabled = fieldValueType.Enabled
    }
}
