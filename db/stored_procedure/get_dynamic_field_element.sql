CREATE OR ALTER PROCEDURE get_dynamic_field_element
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_dynamic_field_element.code_identifier AS 'CodeIdentifier'
        ,tb_dynamic_field_element.description AS 'Description'
        ,tb_dynamic_field_value_type.code_identifier AS 'FieldValueTypeCodeIdentifier'
        ,tb_dynamic_field_element.enabled AS 'Enabled'
    FROM
        tb_dynamic_field_element
    INNER JOIN
        tb_dynamic_field_value_type ON tb_dynamic_field_value_type.id = tb_dynamic_field_element.field_value_type_id
    WHERE
        tb_dynamic_field_element.code_identifier = @code_identifier
END
GO
