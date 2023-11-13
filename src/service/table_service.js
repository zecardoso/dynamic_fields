import { Table } from "../model/table.js"
import { TableRepository } from "../repository/table_repository.js"

export class TableService {
    constructor() {
        this.repository = new TableRepository()
    }
}