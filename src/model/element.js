export class Element {
    constructor(CodeIdentifier, Description, FieldValueType, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.FieldValueType = FieldValueType
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["CodeIdentifier"] !== undefined)
            this.CodeIdentifier = row["CodeIdentifier"]

        if (row["Description"] !== undefined)
            this.Description = row["Description"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
