CREATE OR ALTER PROCEDURE get_dynamic_field_value_type
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field_value_type
    WHERE
        id = @id
END
GO
