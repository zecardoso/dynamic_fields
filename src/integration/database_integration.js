export class DataBaseIntegration {
    constructor() {

    }

    Execute(procedure, parameters) {
        const command = this.#GenerateProcedureCommand(procedure, parameters);

        // const fields = SqlServer.Execute(command);
    }

    #GenerateProcedureCommand(procedure, parameters) {
        var command = "exec ";

        command = command.concat(procedure, " ")

        parameters.forEach((parameter, index) => {
            if (index !== 0) {
                command = command.concat(", ")
            }

            command = command.concat("@", parameter.name, " = ", parameter.value)
        });

        return command;
    }
}
