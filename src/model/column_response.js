import { TableResponse } from "./table_response.js"

export class ColumnResponse {
    constructor(CodeIdentifier, Description, Table, Name, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Table = Table
        this.Name = Name
        this.Enabled = Enabled
    }

    Set(column) {
        this.CodeIdentifier = column.CodeIdentifier
        this.Description = column.Description

        this.Table = new TableResponse()
        this.Table.Set(column.Table)

        this.Name = column.Name
        this.Enabled = column.Enabled
    }
}
