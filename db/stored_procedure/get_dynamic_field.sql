CREATE OR ALTER PROCEDURE get_dynamic_field
    @id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         id AS 'Id'
        ,description AS 'Description'
        ,element_id AS 'ElementId'
        ,column_id AS 'ColumnId'
        ,name AS 'Name'
        ,caption AS 'Caption'
        ,hidden AS 'Hidden'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field
    WHERE
        id = @id
END
GO
