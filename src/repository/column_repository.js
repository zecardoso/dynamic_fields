import { Column } from "../model/column.js"
import { DataBaseIntegration } from "../integration/database_integration.js"
import { TableRepository } from "./table_repository.js"

export class ColumnRepository {
    #integration
    #tableRepository

    constructor() {
        this.#integration = new DataBaseIntegration()
        this.#tableRepository = new TableRepository()
    }

    async Get(codeIdentifier) {
        const parameters = [
            { name: "code_identifier", value: codeIdentifier }
        ]

        const recordSets = await this.#integration.Execute("get_column", parameters)

        let column = new Column()

        if (recordSets === null) {
            return column
        }

        const row = recordSets[0][0]

        column.GetFromRow(row)

        await this.#SetColumnTable(column, row)

        return column
    }

    async #SetColumnTable(column, row) {
        if (row["TableCodeIdentifier"] !== undefined) {
            const tableCodeIdentifier = row["TableCodeIdentifier"]

            column.Table = await this.#tableRepository.Get(tableCodeIdentifier)
        }
    }
}