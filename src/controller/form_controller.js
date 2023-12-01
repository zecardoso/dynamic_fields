import { FormService } from "../service/form_service.js"

export class FormController {
    constructor() { }

    async GetForm(params, headers, body) {
        const codeIdentifier = params["codeIdentifier"]
        const userTypeCodeIdentifier = headers["user-type-code-identifier"]

        const formService = new FormService()

        const response = await formService.Get(codeIdentifier, userTypeCodeIdentifier)

        return response
    }
}