CREATE OR ALTER PROCEDURE get_user
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,code_identifier AS 'CodeIdentifier'
        ,user_type_id AS 'UserTypeId'
        ,name AS 'Name'
        ,enabled AS 'Enabled'
    FROM
        tb_user
    WHERE
        id = @id
END
GO
