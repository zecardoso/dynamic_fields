
DECLARE @CodeIdentifierFieldId int
SELECT @CodeIdentifierFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'CodeIdentifier'

DECLARE @UserTypeIdFieldId int
SELECT @UserTypeIdFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'UserTypeId'

DECLARE @NameFieldId int
SELECT @NameFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'Name'

DECLARE @EnabledFieldId int
SELECT @EnabledFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'Enabled'

DECLARE @AdministratorUserTypeId int
SELECT @AdministratorUserTypeId = id FROM tb_user_type WHERE code_identifier = 'Administrator'

DECLARE @StandardUserTypeId int
SELECT @StandardUserTypeId = id FROM tb_user_type WHERE code_identifier = 'Standard'

DECLARE @GuestUserTypeId int
SELECT @GuestUserTypeId = id FROM tb_user_type WHERE code_identifier = 'Guest'

DECLARE @MaximumLengthConditionTypeId int
SELECT @MaximumLengthConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'MaximumLength'

DECLARE @MinimumLengthConditionTypeId int
SELECT @MinimumLengthConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'MinimumLength'

DECLARE @MaximumConditionTypeId int
SELECT @MaximumConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'Maximum'

DECLARE @MinimumConditionTypeId int
SELECT @MinimumConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'Minimum'

DECLARE @RequiredConditionTypeId int
SELECT @RequiredConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'Required'

DECLARE @ReadonlyConditionTypeId int
SELECT @ReadonlyConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'Readonly'

DECLARE @DisabledConditionTypeId int
SELECT @DisabledConditionTypeId = id FROM tb_dynamic_field_condition_type WHERE code_identifier = 'Disabled'

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@CodeIdentifierFieldId, @AdministratorUserTypeId, @ReadonlyConditionTypeId, NULL, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@UserTypeIdFieldId, @AdministratorUserTypeId, @RequiredConditionTypeId, NULL, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@NameFieldId, @AdministratorUserTypeId, @ReadonlyConditionTypeId, NULL, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@EnabledFieldId, @AdministratorUserTypeId, @RequiredConditionTypeId, NULL, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@CodeIdentifierFieldId, @StandardUserTypeId, @MaximumLengthConditionTypeId, 50, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@CodeIdentifierFieldId, @StandardUserTypeId, @MinimumLengthConditionTypeId, 3, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@CodeIdentifierFieldId, @StandardUserTypeId, @RequiredConditionTypeId, NULL, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@NameFieldId, @StandardUserTypeId, @MaximumLengthConditionTypeId, 100, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@NameFieldId, @StandardUserTypeId, @MinimumLengthConditionTypeId, 3, 1)

INSERT INTO tb_dynamic_field_condition_user (field_id, user_type_id, condition_type_id, value, enabled)
VALUES (@NameFieldId, @StandardUserTypeId, @RequiredConditionTypeId, NULL, 1)
