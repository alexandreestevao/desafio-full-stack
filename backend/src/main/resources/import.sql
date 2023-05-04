INSERT INTO tb_empresa(id, nome_fantasia, cnpj, cep, moment) VALUES (1, 'Accenture', '41765186000157', '88132150', null);
INSERT INTO tb_empresa(id, nome_fantasia, cnpj, cep, moment) VALUES (2, 'Santander', '41216752000171', '25271112', null);

INSERT INTO tb_fornecedor(id, cpf_cnpj, rg, data_nascimento, nome, email, cep, moment) VALUES (1, '73677074000130', null, null, 'Americanas SA', 'americanas@americanas.com', '88132155', null);
INSERT INTO tb_fornecedor(id, cpf_cnpj, rg, data_nascimento, nome, email, cep, moment) VALUES (2, '22321585000184', null, null, 'PontoFrio SA', 'contato@pontofrio.com', '88121150', null);
INSERT INTO tb_fornecedor(id, cpf_cnpj, rg, data_nascimento, nome, email, cep, moment) VALUES (3, '01614566348', '096310042', '26081973', 'Joaquim José da Silva Xavier', 'jjsx@jjsx.com', '25071110', null);

INSERT INTO tb_empresa_fornecedor(empresa_id, fornecedor_id) VALUES (1, 1)
INSERT INTO tb_empresa_fornecedor(empresa_id, fornecedor_id) VALUES (1, 2)
INSERT INTO tb_empresa_fornecedor(empresa_id, fornecedor_id) VALUES (2, 1)
INSERT INTO tb_empresa_fornecedor(empresa_id, fornecedor_id) VALUES (2, 2)
INSERT INTO tb_empresa_fornecedor(empresa_id, fornecedor_id) VALUES (2, 3)