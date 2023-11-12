CREATE TABLE tb_dynamic_field_value_type
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_value_type
ADD CONSTRAINT pk_tb_dynamic_field_value_type PRIMARY KEY ( id );
GO
