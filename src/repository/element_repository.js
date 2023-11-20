import { Element } from "../model/element.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { FieldValueTypeRepository } from "./field_value_type_repository.js"

export class ElementRepository {
    #integration
    #fieldValueTypeRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#fieldValueTypeRepository = new FieldValueTypeRepository()
    }

    async Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        const recordSets = await this.#integration.Execute("get_dynamic_field_element", parameters)

        let element = new Element()

        if (recordSets === null) {
            return element
        }

        const row = recordSets[0][0]

        element.GetFromRow(row)

        await this.#SetElementFieldValueType(element, row)

        return element
    }

    async #SetElementFieldValueType(element, row) {
        if (row["FieldValueTypeId"] !== undefined) {
            const fieldValueTypeId = row["FieldValueTypeId"]

            element.FieldValueType = await this.#fieldValueTypeRepository.Get(fieldValueTypeId)
        }
    }
}