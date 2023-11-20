export class UserType {
    constructor(Id, CodeIdentifier, Description, Enabled) {
        this.Id = Id
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["Id"] !== undefined)
            this.Id = row["Id"]

        if (row["CodeIdentifier"] !== undefined)
            this.CodeIdentifier = row["CodeIdentifier"]

        if (row["Description"] !== undefined)
            this.Description = row["Description"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
