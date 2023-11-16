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
CREATE TABLE tb_dynamic_field_condition_type
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_condition_type
ADD CONSTRAINT pk_tb_dynamic_field_condition_type PRIMARY KEY ( id );
GO
CREATE TABLE tb_user_type
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_user_type
ADD CONSTRAINT pk_tb_user_type PRIMARY KEY ( id );
GO
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
CREATE TABLE tb_dynamic_field
(
     id int IDENTITY(1, 1)
    ,code_identifier nvarchar(50) NOT NULL
    ,description nvarchar(100)
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
ADD CONSTRAINT fk_tb_dynamic_field_tb_column
FOREIGN KEY ( column_id ) REFERENCES tb_column( id );
GO
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
CREATE TABLE tb_dynamic_field_form_field
(
     form_id int NOT NULL
    ,field_id int NOT NULL
    ,element_id int NOT NULL
    ,name nvarchar(100)
    ,caption nvarchar(100)
    ,hidden bit
    ,rank_order int
    ,enabled bit NOT NULL
)
GO

ALTER TABLE tb_dynamic_field_form_field
ADD CONSTRAINT fk_tb_dynamic_field_form_field_tb_dynamic_field_form
FOREIGN KEY ( form_id ) REFERENCES tb_dynamic_field_form( id );
GO

ALTER TABLE tb_dynamic_field_form_field
ADD CONSTRAINT fk_tb_dynamic_field_form_field_tb_dynamic_field
FOREIGN KEY ( field_id ) REFERENCES tb_dynamic_field( id );
GO

ALTER TABLE tb_dynamic_field_form_field
ADD CONSTRAINT fk_tb_dynamic_field_form_field_tb_dynamic_field_element
FOREIGN KEY ( element_id ) REFERENCES tb_dynamic_field_element( id );
GO
