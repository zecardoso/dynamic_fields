CREATE OR ALTER PROCEDURE get_dynamic_field_element
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,field_value_type_id AS 'FieldValueTypeId'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field_element
    WHERE
        id = @id
END
GO
