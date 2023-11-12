const connectionString = "Data Source=localhost;Initial Catalog=db_dynamic_fields;User ID=sa;Password=0#DynamicFields;Provider=SQLOLEDB";

export class SqlServer {
    constructor() {
        this.connection = new ActiveXObject("ADODB.Connection");
        this.recordSet = new ActiveXObject("ADODB.Recordset");
    }

    Execute(source) {
        this.connection.Open(connectionString);
        this.recordSet.Open(source, this.connection);
        const fields = this.recordSet.fields;

        this.recordSet.Close();
        this.connection.Close();

        return fields;
    }
}