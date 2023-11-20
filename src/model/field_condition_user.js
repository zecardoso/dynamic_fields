export class FieldConditionUser {
    constructor(UserType, ConditionType, Value, Enabled) {
        this.UserType = UserType
        this.ConditionType = ConditionType
        this.Value = Value
        this.Enabled = Enabled
    }

    GetFromRow(row) {
        if (row["Value"] !== undefined)
            this.Value = row["Value"]

        if (row["Enabled"] !== undefined)
            this.Enabled = row["Enabled"]
    }
}
