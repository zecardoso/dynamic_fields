import sql from "mssql"

const connectionString = "Server=localhost,1433;Database=db_dynamic_fields;User Id=sa;Password=0#DynamicFields;trustServerCertificate=true"

export class SqlServer {
    constructor() {
    }

    static async Execute(procedure, parameters) {
        try {
            const pool = await new sql.ConnectionPool(connectionString)

            await pool.connect()

            const request = await pool.request()

            parameters.forEach(parameter => {
                request.input(parameter.name, parameter.value)
            })

            let result = await request.execute(procedure)

            await pool.close()

            console.log(result.recordsets.length) // count of recordsets returned by the procedure
            console.log(result.recordsets[0].length) // count of rows contained in first recordset
            console.log(result.recordset) // first recordset from result.recordsets
            console.log(result.returnValue) // procedure return value
            console.log(result.output) // key/value collection of output values
            console.log(result.rowsAffected) // array of numbers, each number represents the number of rows affected by executed statemens

            return result;
        } catch (error) {
            console.error(error)
        }
    }
}
