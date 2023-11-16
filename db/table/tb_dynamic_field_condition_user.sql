CREATE TABLE tb_dynamic_field_condition_user
(
     field_id int NOT NULL
    ,user_type_id int NOT NULL
    ,condition_type_id int NOT NULL
    ,value int
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_condition_user
ADD CONSTRAINT fk_tb_dynamic_field_condition_user_tb_dynamic_field
FOREIGN KEY ( field_id ) REFERENCES tb_dynamic_field( id );
GO

ALTER TABLE tb_dynamic_field_condition_user
ADD CONSTRAINT fk_tb_dynamic_field_condition_user_tb_user_type
FOREIGN KEY ( user_type_id ) REFERENCES tb_user_type( id );
GO

ALTER TABLE tb_dynamic_field_condition_user
ADD CONSTRAINT fk_tb_dynamic_field_condition_user_tb_dynamic_field_condition_type
FOREIGN KEY ( condition_type_id ) REFERENCES tb_dynamic_field_condition_type( id );
GO
