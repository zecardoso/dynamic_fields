CREATE OR ALTER PROCEDURE get_column
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_column.code_identifier AS 'CodeIdentifier'
        ,tb_column.description AS 'Description'
        ,tb_table.code_identifier AS 'TableCodeIdentifier'
        ,tb_column.name AS 'Name'
        ,tb_column.enabled AS 'Enabled'
    FROM
        tb_column
    INNER JOIN
        tb_table ON tb_table.id = tb_column.table_id
    WHERE
        tb_column.code_identifier = @code_identifier
END
GO
