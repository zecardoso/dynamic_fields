import { ConditionTypeResponse } from "./condition_type_response.js"
import { UserTypeResponse } from "./user_type_response.js"

export class FieldConditionUserResponse {
    constructor(UserType, ConditionType, Value, Enabled) {
        this.UserType = UserType
        this.ConditionType = ConditionType
        this.Value = Value
        this.Enabled = Enabled
    }

    Set(fieldConditionUser) {
        this.UserType = new UserTypeResponse()
        this.UserType.Set(fieldConditionUser.UserType)

        this.ConditionType = new ConditionTypeResponse()
        this.ConditionType.Set(fieldConditionUser.ConditionType)

        this.Value = fieldConditionUser.Value
        this.Enabled = fieldConditionUser.Enabled
    }
}
