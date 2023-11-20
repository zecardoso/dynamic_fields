import { Table } from "../model/table.js"
import { TableRepository } from "../repository/table_repository.js"

export class TableService {
    #repository

    constructor() {
        this.#repository = new TableRepository()
    }

    async Get(id) {
        const table = await this.#repository.Get(id)

        return table
    }
}