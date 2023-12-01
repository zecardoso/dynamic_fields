CREATE OR ALTER PROCEDURE get_table
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,name AS 'Name'
        ,enabled AS 'Enabled'
    FROM
        tb_table
    WHERE
        code_identifier = @code_identifier
END
GO
