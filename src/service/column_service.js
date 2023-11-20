import { Column } from "../model/column.js"
import { ColumnRepository } from "../repository/column_repository.js"

export class ColumnService {
    #repository

    constructor() {
        this.#repository = new ColumnRepository()
    }

    async Get(id) {
        const column = await this.#repository.Get(id)

        return column
    }
}