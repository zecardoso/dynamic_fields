CREATE OR ALTER PROCEDURE get_table
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,name AS 'Name'
        ,enabled AS 'Enabled'
    FROM
        tb_table
    WHERE
        id = @id
END
GO
