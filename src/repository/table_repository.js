import { Table } from "../model/table.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class TableRepository {
    constructor() {
        this.integration = new DataBaseIntegration()
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_table", parameters)
    }
}