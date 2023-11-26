import { TableResponse } from "../model/table_response.js"
import { TableRepository } from "../repository/table_repository.js"

export class TableService {
    #repository

    constructor() {
        this.#repository = new TableRepository()
    }

    async Get(id) {
        const table = await this.#repository.Get(id)

        const tableResponse = new TableResponse()

        tableResponse.Set(table)

        return tableResponse
    }
}