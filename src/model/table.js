export class Table {
    constructor(Id, CodeIdentifier, Description, Name, Enabled) {
        this.Id = Id
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Name = Name
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["Id"] !== undefined)
            this.Id = row["Id"]

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
