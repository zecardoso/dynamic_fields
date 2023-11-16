CREATE TABLE tb_dynamic_field_form
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_form
ADD CONSTRAINT pk_tb_dynamic_field_form PRIMARY KEY ( id );
GO
