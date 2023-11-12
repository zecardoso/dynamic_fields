CREATE TABLE tb_table
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,name nvarchar(100) NOT NULL
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_table
ADD CONSTRAINT pk_tb_table PRIMARY KEY ( id );
GO
