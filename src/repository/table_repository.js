import { Table } from "../model/table.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class TableRepository {
    #integration

    constructor() {
        this.#integration = new DataBaseIntegration()
    }

    async Get(codeIdentifier) {
        const parameters = [
            { name: "code_identifier", value: codeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_table", parameters)

        let table = new Table()

        if (recordSets === null) {
            return table
        }

        const row = recordSets[0][0]

        table.GetFromRow(row)

        return table
    }
}