CREATE OR ALTER PROCEDURE get_user
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_user.code_identifier AS 'CodeIdentifier'
        ,tb_user_type.code_identifier AS 'UserTypeCodeIdentifier'
        ,tb_user.name AS 'Name'
        ,tb_user.enabled AS 'Enabled'
    FROM
        tb_user
    INNER JOIN
        tb_user_type ON tb_user_type.id = tb_user.user_type_id
    WHERE
        tb_user.code_identifier = @code_identifier
END
GO
