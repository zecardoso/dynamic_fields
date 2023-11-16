
DECLARE @UserFormId int
SELECT @UserFormId = id FROM tb_dynamic_field_form WHERE code_identifier = 'User'

DECLARE @TextElementId int
SELECT @TextElementId = id FROM tb_dynamic_field_element WHERE code_identifier = 'Text'

DECLARE @NumberElementId int
SELECT @NumberElementId = id FROM tb_dynamic_field_element WHERE code_identifier = 'Number'

DECLARE @CheckboxElementId int
SELECT @CheckboxElementId = id FROM tb_dynamic_field_element WHERE code_identifier = 'Checkbox'

DECLARE @CodeIdentifierFieldId int
SELECT @CodeIdentifierFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'CodeIdentifier'

DECLARE @UserTypeIdFieldId int
SELECT @UserTypeIdFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'UserTypeId'

DECLARE @NameFieldId int
SELECT @NameFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'Name'

DECLARE @EnabledFieldId int
SELECT @EnabledFieldId = id FROM tb_dynamic_field WHERE code_identifier = 'Enabled'

INSERT INTO tb_dynamic_field_form_field (form_id, field_id, element_id, name, caption, hidden, rank_order, enabled)
VALUES (@UserFormId, @CodeIdentifierFieldId, @TextElementId, NULL, NULL, NULL, NULL, 1)

INSERT INTO tb_dynamic_field_form_field (form_id, field_id, element_id, name, caption, hidden, rank_order, enabled)
VALUES (@UserFormId, @UserTypeIdFieldId, @NumberElementId, NULL, NULL, NULL, NULL, 1)

INSERT INTO tb_dynamic_field_form_field (form_id, field_id, element_id, name, caption, hidden, rank_order, enabled)
VALUES (@UserFormId, @NameFieldId, @TextElementId, NULL, NULL, NULL, NULL, 1)

INSERT INTO tb_dynamic_field_form_field (form_id, field_id, element_id, name, caption, hidden, rank_order, enabled)
VALUES (@UserFormId, @EnabledFieldId, @CheckboxElementId, NULL, NULL, NULL, NULL, 1)
