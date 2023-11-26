import { ElementResponse } from "./element_response.js"
import { FieldResponse } from "./field_response.js"

export class FormFieldResponse {
    constructor(Field, Element, Name, Caption, Hidden, RankOrder, Enabled) {
        this.Field = Field
        this.Element = Element
        this.Name = Name
        this.Caption = Caption
        this.Hidden = Hidden
        this.RankOrder = RankOrder
        this.Enabled = Enabled
    }

    Set(formField) {
        this.Field = new FieldResponse()
        this.Field.Set(formField.Field)

        this.Element = new ElementResponse()
        this.Element.Set(formField.Element)

        this.Name = formField.Name
        this.Caption = formField.Caption
        this.Hidden = formField.Hidden
        this.RankOrder = formField.RankOrder
        this.Enabled = formField.Enabled
    }
}
