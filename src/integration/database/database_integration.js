import { SqlServer } from "./sql_server.js"

export class DataBaseIntegration {
    Execute(source) {
        const fields = SqlServer.Execute(source);

        return fields;
    }
}
