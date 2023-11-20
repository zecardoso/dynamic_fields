import { Form } from "../model/form.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { FormFieldRepository } from "./form_field_repository.js";

export class FormRepository {
    #integration
    #formFieldRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#formFieldRepository = new FormFieldRepository()
    }

    async Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_form", parameters)

        let form = new Form()

        if (recordSets === null) {
            return form
        }

        const row = recordSets[0][0]

        form.GetFromRow(row)

        await this.#SetFormFields(form)

        return form
    }

    async #SetFormFields(form) {
        form.Fields = await this.#formFieldRepository.Get(form.Id)
    }
}