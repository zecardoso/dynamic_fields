import { TableResponse } from "../model/table_response.js"
import { TableRepository } from "../repository/table_repository.js"

export class TableService {
    #repository

    constructor() {
        this.#repository = new TableRepository()
    }

    async Get(codeIdentifier) {
        const table = await this.#repository.Get(codeIdentifier)

        const tableResponse = new TableResponse()

        tableResponse.Set(table)

        return tableResponse
    }
}