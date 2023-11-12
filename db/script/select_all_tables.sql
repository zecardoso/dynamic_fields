SELECT
     id
    ,code_identifier
    ,description
    ,table_id
    ,name
    ,enabled
FROM tb_column
GO

SELECT
     id
    ,description
    ,element_id
    ,column_id
    ,name
    ,caption
    ,hidden
    ,enabled
FROM tb_dynamic_field
GO

SELECT
     id
    ,code_identifier
    ,description
    ,enabled
FROM tb_dynamic_field_condition_type
GO

SELECT
     field_id
    ,user_type_id
    ,condition_type_id
    ,value
    ,enabled
FROM tb_dynamic_field_condition_user
GO

SELECT
     id
    ,code_identifier
    ,description
    ,field_value_type_id
    ,enabled
FROM tb_dynamic_field_element
GO

SELECT
     id
    ,description
    ,enabled
FROM tb_dynamic_field_form
GO

SELECT
     form_id
    ,field_id
    ,name
    ,caption
    ,hidden
    ,rank_order
    ,enabled
FROM tb_dynamic_field_form_field
GO

SELECT
     id
    ,code_identifier
    ,description
    ,enabled
FROM tb_dynamic_field_value_type
GO

SELECT
     id
    ,code_identifier
    ,description
    ,name
    ,enabled
FROM tb_table
GO

SELECT
     id
    ,code_identifier
    ,user_type_id
    ,name
    ,enabled
FROM tb_user
GO

SELECT
     id
    ,code_identifier
    ,description
    ,enabled
FROM tb_user_type
GO

