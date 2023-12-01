export class Form {
    constructor(CodeIdentifier, Description, Fields, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Fields = Fields
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
