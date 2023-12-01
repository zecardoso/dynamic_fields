CREATE OR ALTER PROCEDURE get_user_type
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         code_identifier AS 'CodeIdentifier'
        ,description AS 'Description'
        ,enabled AS 'Enabled'
    FROM
        tb_user_type
    WHERE
        code_identifier = @code_identifier
END
GO
