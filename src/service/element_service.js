import { Element } from "../model/element.js"
import { ElementRepository } from "../repository/element_repository.js"

export class ElementService {
    #repository

    constructor() {
        this.#repository = new ElementRepository()
    }

    async Get(id) {
        const element = await this.#repository.Get(id)

        return element
    }
}