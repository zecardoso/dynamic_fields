export class Column {
    constructor(CodeIdentifier, Description, Table, Name, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Table = Table
        this.Name = Name
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["CodeIdentifier"] !== undefined)
            this.CodeIdentifier = row["CodeIdentifier"]

        if (row["Description"] !== undefined)
            this.Description = row["Description"]

        if (row["Name"] !== undefined)
            this.Name = row["Name"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
