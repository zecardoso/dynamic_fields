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
