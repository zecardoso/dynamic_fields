import { FieldValueTypeResponse } from "./field_value_type_response.js"

export class ElementResponse {
    constructor(CodeIdentifier, Description, FieldValueType, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.FieldValueType = FieldValueType
        this.Enabled = Enabled
    }

    Set(element) {
        this.CodeIdentifier = element.CodeIdentifier
        this.Description = element.Description

        this.FieldValueType = new FieldValueTypeResponse()
        this.FieldValueType.Set(element.FieldValueType)

        this.Enabled = element.Enabled
    }
}
