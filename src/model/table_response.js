export class TableResponse {
    constructor(CodeIdentifier, Description, Name, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Name = Name
        this.Enabled = Enabled
    }

    Set(table) {
        this.CodeIdentifier = table.CodeIdentifier
        this.Description = table.Description
        this.Name = table.Name
        this.Enabled = table.Enabled
    }
}
