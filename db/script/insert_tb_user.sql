
DECLARE @StandardUserTypeId int
SELECT @StandardUserTypeId = id FROM tb_user_type WHERE code_identifier = 'Standard'

INSERT INTO tb_user (code_identifier, user_type_id, name, enabled)
VALUES ('josecardoso', @StandardUserTypeId, 'José Cardoso', 1)
