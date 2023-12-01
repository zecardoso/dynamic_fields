CREATE OR ALTER PROCEDURE get_dynamic_field_form_field
    @form_code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_dynamic_field_form.code_identifier AS 'FormCodeIdentifier'
        ,tb_dynamic_field.code_identifier AS 'FieldCodeIdentifier'
        ,tb_dynamic_field_element.code_identifier AS 'ElementCodeIdentifier'
        ,tb_dynamic_field_form_field.name AS 'Name'
        ,tb_dynamic_field_form_field.caption AS 'Caption'
        ,tb_dynamic_field_form_field.hidden AS 'Hidden'
        ,tb_dynamic_field_form_field.rank_order AS 'RankOrder'
        ,tb_dynamic_field_form_field.enabled AS 'Enabled'
    FROM
        tb_dynamic_field_form_field
    INNER JOIN
        tb_dynamic_field_form ON tb_dynamic_field_form.id = tb_dynamic_field_form_field.form_id
    INNER JOIN
        tb_dynamic_field ON tb_dynamic_field.id = tb_dynamic_field_form_field.field_id
    INNER JOIN
        tb_dynamic_field_element ON tb_dynamic_field_element.id = tb_dynamic_field_form_field.element_id
    WHERE
        tb_dynamic_field_form.code_identifier = @form_code_identifier
END
GO
