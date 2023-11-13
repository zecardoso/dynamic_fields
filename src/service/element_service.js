import { Element } from "../model/element.js"
import { ElementRepository } from "../repository/element_repository.js"

export class ElementService {
    constructor() {
        this.repository = new ElementRepository()
    }
}