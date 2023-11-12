CREATE OR ALTER PROCEDURE get_dynamic_field_condition_user
     @field_id int
    ,@user_type_id int
AS
BEGIN
    SET NOCOUNT ON

    SELECT
         field_id AS 'FieldId'
        ,user_type_id AS 'UserTypeId'
        ,condition_type_id AS 'ConditionTypeId'
        ,value AS 'Value'
        ,enabled AS 'Enabled'
    FROM
        tb_dynamic_field_condition_user
    WHERE
        field_id = @field_id
        AND
        user_type_id = @user_type_id
END
GO
