import { ElementResponse } from "../model/element_response.js"
import { ElementRepository } from "../repository/element_repository.js"

export class ElementService {
    #repository

    constructor() {
        this.#repository = new ElementRepository()
    }

    async Get(codeIdentifier) {
        const element = await this.#repository.Get(codeIdentifier)

        const elementResponse = new ElementResponse()

        elementResponse.Set(element)

        return elementResponse
    }
}