
DECLARE @IntegerTypeId int
SELECT @IntegerTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'Integer'

DECLARE @FloatingPointTypeId int
SELECT @FloatingPointTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'FloatingPoint'

DECLARE @StringTypeId int
SELECT @StringTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'String'

DECLARE @BooleanTypeId int
SELECT @BooleanTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'Boolean'

DECLARE @DateTypeId int
SELECT @DateTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'Date'

DECLARE @DateTimeTypeId int
SELECT @DateTimeTypeId = id FROM tb_dynamic_field_value_type WHERE code_identifier = 'DateTime'

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('Number', NULL, @IntegerTypeId, 1)

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('Text', NULL, @StringTypeId, 1)

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('Email', NULL, @StringTypeId, 1)

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('Checkbox', NULL, @BooleanTypeId, 1)

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('Date', NULL, @DateTypeId, 1)

INSERT INTO tb_dynamic_field_element (code_identifier, description, field_value_type_id, enabled)
VALUES ('DateTime', NULL, @DateTimeTypeId, 1)
