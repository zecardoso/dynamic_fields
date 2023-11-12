CREATE TABLE tb_dynamic_field
(
     id int IDENTITY(1, 1)
    ,description nvarchar(100)
    ,element_id int NOT NULL
    ,column_id int NOT NULL
    ,name nvarchar(100)
    ,caption nvarchar(100)
    ,hidden bit NOT NULL
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field
ADD CONSTRAINT pk_tb_dynamic_field PRIMARY KEY ( id );
GO

ALTER TABLE tb_dynamic_field
ADD CONSTRAINT fk_tb_dynamic_field_tb_dynamic_field_element
FOREIGN KEY ( element_id ) REFERENCES tb_dynamic_field_element( id );
GO

ALTER TABLE tb_dynamic_field
ADD CONSTRAINT fk_tb_dynamic_field_tb_column
FOREIGN KEY ( column_id ) REFERENCES tb_column( id );
GO
