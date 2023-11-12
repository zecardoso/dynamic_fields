CREATE OR ALTER PROCEDURE get_user_type
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
        tb_user_type
    WHERE
        id = @id
END
GO
