CREATE OR ALTER PROCEDURE get_dynamic_field_condition_user
     @field_code_identifier nvarchar(50)
    ,@user_type_code_identifier nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         tb_dynamic_field.code_identifier AS 'FieldCodeIdentifier'
        ,tb_user_type.code_identifier AS 'UserTypeCodeIdentifier'
        ,tb_dynamic_field_condition_type.code_identifier AS 'ConditionTypeCodeIdentifier'
        ,tb_dynamic_field_condition_user.value AS 'Value'
        ,tb_dynamic_field_condition_user.enabled AS 'Enabled'
    FROM
        tb_dynamic_field_condition_user
    INNER JOIN
        tb_dynamic_field ON tb_dynamic_field.id = tb_dynamic_field_condition_user.field_id
    INNER JOIN
        tb_user_type ON tb_user_type.id = tb_dynamic_field_condition_user.user_type_id
    INNER JOIN
        tb_dynamic_field_condition_type ON tb_dynamic_field_condition_type.id = tb_dynamic_field_condition_user.condition_type_id
    WHERE
        tb_dynamic_field.code_identifier = @field_code_identifier
        AND
        tb_user_type.code_identifier = @user_type_code_identifier
END
GO
