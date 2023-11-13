import { Column } from "../model/column.js"
import { DataBaseIntegration } from "../integration/database_integration.js"

export class ColumnRepository {
    constructor() {
        this.integration = new DataBaseIntegration();
    }

    Get(id) {
        const parameters = [
            { name: "id", value: id }
        ]

        this.integration.Execute("get_column", parameters);
    }
}