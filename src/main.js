import { FormService } from "./service/form_service.js"
import express from "express"

const service = new FormService()
const form = await service.Get(1)
console.log(form)

const app = express()

app.listen(3000)