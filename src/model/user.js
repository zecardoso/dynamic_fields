export class User {
    constructor(Id, CodeIdentifier, UserType, Name, Enabled) {
        this.Id = Id
        this.CodeIdentifier = CodeIdentifier
        this.UserType = UserType
        this.Name = Name
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["Id"] !== undefined)
            this.Id = row["Id"]

        if (row["CodeIdentifier"] !== undefined)
            this.CodeIdentifier = row["CodeIdentifier"]

        if (row["Name"] !== undefined)
            this.Name = row["Name"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
