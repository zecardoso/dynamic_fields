CREATE TABLE tb_column
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,table_id int NOT NULL
    ,name nvarchar(100) NOT NULL
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_column
ADD CONSTRAINT pk_tb_column PRIMARY KEY ( id );
GO

ALTER TABLE tb_column
ADD CONSTRAINT fk_tb_column_tb_table
FOREIGN KEY ( table_id ) REFERENCES tb_table( id );
GO
