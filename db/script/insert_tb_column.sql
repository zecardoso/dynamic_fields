
DECLARE @UserTableId int
SELECT @UserTableId = id FROM tb_table WHERE code_identifier = 'User'

INSERT INTO tb_column (code_identifier, description, table_id, name, enabled)
VALUES ('Id', NULL, @UserTableId, 'id', 1)

INSERT INTO tb_column (code_identifier, description, table_id, name, enabled)
VALUES ('CodeIdentifier', NULL, @UserTableId, 'code_identifier', 1)

INSERT INTO tb_column (code_identifier, description, table_id, name, enabled)
VALUES ('UserTypeId', NULL, @UserTableId, 'user_type_id', 1)

INSERT INTO tb_column (code_identifier, description, table_id, name, enabled)
VALUES ('Name', NULL, @UserTableId, 'name', 1)

INSERT INTO tb_column (code_identifier, description, table_id, name, enabled)
VALUES ('Enabled', NULL, @UserTableId, 'enabled', 1)
