export class Field {
    constructor(CodeIdentifier, Description, Column, Name, Caption, Hidden, Conditions, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Column = Column
        this.Name = Name
        this.Caption = Caption
        this.Hidden = Hidden
        this.Conditions = Conditions
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["CodeIdentifier"] !== undefined)
            this.CodeIdentifier = row["CodeIdentifier"]

        if (row["Description"] !== undefined)
            this.Description = row["Description"]

        if (row["Name"] !== undefined)
            this.Name = row["Name"]

        if (row["Caption"] !== undefined)
            this.Caption = row["Caption"]

        if (row["Hidden"] !== undefined)
            this.Hidden = row["Hidden"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
