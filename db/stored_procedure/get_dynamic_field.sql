CREATE OR ALTER PROCEDURE get_dynamic_field
    @code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_dynamic_field.code_identifier AS 'CodeIdentifier'
        ,tb_dynamic_field.description AS 'Description'
        ,tb_column.code_identifier AS 'ColumnCodeIdentifier'
        ,tb_dynamic_field.name AS 'Name'
        ,tb_dynamic_field.caption AS 'Caption'
        ,tb_dynamic_field.hidden AS 'Hidden'
        ,tb_dynamic_field.enabled AS 'Enabled'
    FROM
        tb_dynamic_field
    INNER JOIN
        tb_column ON tb_column.id = tb_dynamic_field.column_id
    WHERE
        tb_dynamic_field.code_identifier = @code_identifier
END
GO
