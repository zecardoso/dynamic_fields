import { FormField } from "../model/form_field.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { FieldRepository } from "./field_repository.js"
import { ElementRepository } from "./element_repository.js"

export class FormFieldRepository {
    #integration
    #fieldRepository
    #elementRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#fieldRepository = new FieldRepository()
        this.#elementRepository = new ElementRepository()
    }

    async Get(formCodeIdentifier, userTypeCodeIdentifier) {
        const parameters = [
            { name: "form_code_identifier", value: formCodeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_form_field", parameters)

        let formFields = []

        if (recordSets === null) {
            return formFields
        }

        const rows = recordSets[0]

        for (const row of rows) {
            let formField = new FormField()

            formField.GetFromRow(row)

            await this.#SetFormFieldField(formField, userTypeCodeIdentifier, row)

            await this.#SetFormFieldElement(formField, row)

            formFields.push(formField)
        }

        return formFields
    }

    async #SetFormFieldField(formField, userTypeCodeIdentifier, row) {
        if (row["FieldCodeIdentifier"] !== undefined) {
            const fieldCodeIdentifier = row["FieldCodeIdentifier"]

            formField.Field = await this.#fieldRepository.Get(fieldCodeIdentifier, userTypeCodeIdentifier)
        }
    }

    async #SetFormFieldElement(formField, row) {
        if (row["ElementCodeIdentifier"] !== undefined) {
            const elementCodeIdentifier = row["ElementCodeIdentifier"]

            formField.Element = await this.#elementRepository.Get(elementCodeIdentifier)
        }
    }
}