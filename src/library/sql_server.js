import sql from "mssql"

export class SqlServer {
    #config

    constructor() {
        this.#config = {
            user: 'sa',
            password: '0#DynamicFields',
            server: 'localhost',
            database: 'db_dynamic_fields',
            options: {
                trustServerCertificate: true
            }
        }
    }

    async Execute(procedure, parameters) {
        try {
            const pool = await new sql.ConnectionPool(this.#config)

            await pool.connect()

            const request = await pool.request()

            parameters.forEach(parameter => {
                request.input(parameter.name, parameter.value)
            })

            let result = await request.execute(procedure)

            await pool.close()

            if (result !== null && result.recordsets !== null && result.recordsets.length > 0) {
                return result.recordsets;
            }

            return null;
        } catch (error) {
            console.error(error)
        }
    }
}
