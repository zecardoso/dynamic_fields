import { FormFieldResponse } from "./form_field_response.js"

export class FormResponse {
    constructor(CodeIdentifier, Description, Fields, Enabled) {
        this.CodeIdentifier = CodeIdentifier
        this.Description = Description
        this.Fields = Fields
        this.Enabled = Enabled
    }

    Set(form) {
        this.CodeIdentifier = form.CodeIdentifier
        this.Description = form.Description

        this.Fields = []

        for (const formField of form.Fields) {
            const formFieldResponse = new FormFieldResponse()

            formFieldResponse.Set(formField)

            this.Fields.push(formFieldResponse)
        }

        this.Enabled = form.Enabled
    }
}
