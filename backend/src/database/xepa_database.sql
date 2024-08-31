DROP DATABASE IF EXISTS xepa;
CREATE DATABASE xepa;
USE 'xepa';

CREATE TABLE alertas (id VARCHAR(255) NOT NULL,mensagem VARCHAR(255),endereco VARCHAR(255),data_hora TIMESTAMP);
CREATE TABLE denuncias (id VARCHAR(255) NOT NULL,govbr VARCHAR(255) NOT NULL,descricao VARCHAR(255),endereco VARCAHR(255),data_hora TIMESTAMP);
CREATE TABLE rotas (id VARCHAR(255) NOT NULL,trajeto VARCHAR(2000),endereco VARCHAR(255));

INSERT INTO alertas (id, mensagem, endereco) VALUES ("id_teste,", "mensagem teste", "endereco teste", CURRENT_TIMESTAMP); 