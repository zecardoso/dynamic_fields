import { SqlServer } from "../library/sql_server.js"

export class DataBaseIntegration {
    #database

    constructor() {
        this.#database = new SqlServer()
    }

    async Execute(procedure, parameters) {
        const recordSets = await this.#database.Execute(procedure, parameters)

        return recordSets;
    }
}
