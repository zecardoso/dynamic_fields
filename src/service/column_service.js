import { ColumnResponse } from "../model/column_response.js"
import { ColumnRepository } from "../repository/column_repository.js"

export class ColumnService {
    #repository

    constructor() {
        this.#repository = new ColumnRepository()
    }

    async Get(id) {
        const column = await this.#repository.Get(id)

        const columnResponse = new ColumnResponse()

        columnResponse.Set(column)

        return columnResponse
    }
}