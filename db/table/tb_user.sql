CREATE TABLE tb_user
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,user_type_id INT NOT NULL
    ,name nvarchar(100)
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_user
ADD CONSTRAINT pk_tb_user PRIMARY KEY ( id );
GO

ALTER TABLE tb_user
ADD CONSTRAINT fk_tb_user_tb_user_type
FOREIGN KEY ( user_type_id ) REFERENCES tb_user_type( id );
GO
