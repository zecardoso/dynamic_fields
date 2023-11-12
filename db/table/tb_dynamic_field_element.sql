CREATE TABLE tb_dynamic_field_element
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,field_value_type_id int NOT NULL
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_element
ADD CONSTRAINT pk_tb_dynamic_field_element PRIMARY KEY ( id );
GO

ALTER TABLE tb_dynamic_field_element
ADD CONSTRAINT fk_tb_dynamic_field_element_tb_dynamic_field_value_type
FOREIGN KEY ( field_value_type_id ) REFERENCES tb_dynamic_field_value_type( id );
GO
