CREATE OR ALTER PROCEDURE get_dynamic_field_form
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,description AS 'Description'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field_form
    WHERE
        id = @id
END
GO
