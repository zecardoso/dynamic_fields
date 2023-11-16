
DECLARE @UserTableId int
SELECT @UserTableId = id FROM tb_table WHERE code_identifier = 'User'

DECLARE @IdColumnId int
SELECT @IdColumnId = id FROM tb_column WHERE table_id = @UserTableId AND code_identifier = 'Id'

DECLARE @CodeIdentifierColumnId int
SELECT @CodeIdentifierColumnId = id FROM tb_column WHERE table_id = @UserTableId AND code_identifier = 'CodeIdentifier'

DECLARE @UserTypeIdColumnId int
SELECT @UserTypeIdColumnId = id FROM tb_column WHERE table_id = @UserTableId AND code_identifier = 'UserTypeId'

DECLARE @NameColumnId int
SELECT @NameColumnId = id FROM tb_column WHERE table_id = @UserTableId AND code_identifier = 'Name'

DECLARE @EnabledColumnId int
SELECT @EnabledColumnId = id FROM tb_column WHERE table_id = @UserTableId AND code_identifier = 'Enabled'

INSERT INTO tb_dynamic_field (code_identifier, description, column_id, name, caption, hidden, enabled)
VALUES ('CodeIdentifier', NULL, @CodeIdentifierColumnId, 'Email', 'Email', 0, 1)

INSERT INTO tb_dynamic_field (code_identifier, description, column_id, name, caption, hidden, enabled)
VALUES ('UserTypeId', NULL, @UserTypeIdColumnId, 'UserTypeId', 'UserTypeId', 0, 1)

INSERT INTO tb_dynamic_field (code_identifier, description, column_id, name, caption, hidden, enabled)
VALUES ('Name', NULL, @NameColumnId, 'Name', 'Name', 0, 1)

INSERT INTO tb_dynamic_field (code_identifier, description, column_id, name, caption, hidden, enabled)
VALUES ('Enabled', NULL, @EnabledColumnId, 'Enabled', 'Enabled', 0, 1)
