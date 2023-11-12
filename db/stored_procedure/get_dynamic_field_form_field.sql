CREATE OR ALTER PROCEDURE get_dynamic_field_form_field
    @form_id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         form_id AS 'FormId'
        ,field_id AS 'FieldId'
        ,name AS 'Name'
        ,caption AS 'Caption'
        ,hidden AS 'Hidden'
        ,rank_order AS 'RankOrder'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field_form_field
    WHERE
        form_id = @form_id
END
GO
