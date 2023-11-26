import { FormService } from "../service/form_service.js"

export class FormController {
    constructor() { }

    async GetForm(params, body) {
        const id = params.id

        const formService = new FormService()

        const response = await formService.Get(id)

        return response
    }
}