CREATE OR ALTER PROCEDURE get_column
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,table_id AS 'TableId'
        ,name AS 'Name'
        ,enabled AS 'Enabled'
    FROM
        tb_column
    WHERE
        id = @id
END
GO
