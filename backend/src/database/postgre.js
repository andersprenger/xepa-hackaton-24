const{ Client, ClientBase } = require("pg");
const fs = require("fs")
const path = require("path");
const client = new Client({
    user: "xepa",
    database: "xepa_database",
    host: "localhost",
    password: "123456",
    port: 5432,
});

const connectDatabase = async () => {
    await client.connect()
  
    try {
    
        await client.query("DROP DATABASE IF EXISTS xepa;");

        await client.query("CREATE DATABASE xepa;");

        await client.query("CREATE TABLE alertas (id VARCHAR(255) NOT NULL, titulo VARCHAR(255), mensagem VARCHAR(255),endereco VARCHAR(255),data_hora TIMESTAMP);");
        //await client.query("CREATE TABLE rotas (id VARCHAR(255) NOT NULL,trajeto VARCHAR(2000),endereco VARCHAR(255));");
        await client.query("INSERT INTO alertas (id, titulo, mensagem, endereco, CURRENT_TIMESTAMP())");
        //await client.query("CREATE TABLE denuncias (id VARCHAR(255) NOT NULL,govbr VARCHAR(255) NOT NULL,descricao VARCHAR(255),endereco VARCHAR(255),data_hora TIMESTAMP);");
        
        const res = await client.query('SELECT $1::text as message', ['Hello world!'])

        console.log(res.rows[0].message) // Hello world!
        //const {rows } = await client.query("")
        //const {rows } = await client.query("SELECT * FROM alertas;")
        //console.log(rows)

        
    } catch (err) {
    console.error(err.message);
    } finally {
    await client.end()
    }

}


module.exports = connectDatabase;