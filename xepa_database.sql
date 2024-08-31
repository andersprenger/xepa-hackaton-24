CREATE DATABASE alertas (
    id VARCHAR(255) NOT NULL,
    mensagem VARCHAR(255),
    endereco VARCHAR(255),
    data_hora TIMESTAMP 
);

CREATE DATABASE denuncias (
    id VARCHAR(255) NOT NULL,
    govbr VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    endereco VARCAHR(255),
    data_hora TIMESTAMP
);

CREATE DATABASE rotas (
    id VARCHAR(255) NOT NULL,
    trajeto VARCHAR(500),
    endereco VARCHAR(255)
);