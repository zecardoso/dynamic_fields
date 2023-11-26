import { ColumnResponse } from "./column_response.js"
import { FieldConditionUserResponse } from "./field_condition_user_response.js"

export class FieldResponse {
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

    Set(field) {
        this.CodeIdentifier = field.CodeIdentifier
        this.Description = field.Description

        this.Column = new ColumnResponse()
        this.Column.Set(field.Column)

        this.Name = field.Name
        this.Caption = field.Caption
        this.Hidden = field.Hidden

        this.Conditions = []

        for (const fieldConditionUser of field.Conditions) {
            const conditionResponse = new FieldConditionUserResponse()

            conditionResponse.Set(fieldConditionUser)

            this.Conditions.push(conditionResponse)
        }

        this.Enabled = field.Enabled
    }
}
