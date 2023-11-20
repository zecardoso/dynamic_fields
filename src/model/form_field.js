export class FormField {
    constructor(Field, Element, Name, Caption, Hidden, RankOrder, Enabled) {
        this.Field = Field
        this.Element = Element
        this.Name = Name
        this.Caption = Caption
        this.Hidden = Hidden
        this.RankOrder = RankOrder
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["Name"] !== undefined)
            this.Name = row["Name"]

        if (row["Caption"] !== undefined)
            this.Caption = row["Caption"]

        if (row["Hidden"] !== undefined)
            this.Hidden = row["Hidden"]

        if (row["RankOrder"] !== undefined)
            this.RankOrder = row["RankOrder"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
