import { SqlServer } from "../library/sql_server.js"

export class DataBaseIntegration {
    constructor() {
    }

    Execute(procedure, parameters) {
        const fields = SqlServer.Execute(procedure, parameters);
    }
}
