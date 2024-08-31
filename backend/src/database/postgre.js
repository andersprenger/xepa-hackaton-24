const{ Client } = require("pg");
const client = new Client()
const connectDatabase = async () => {
    await client.connect()
 
    try {
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    } catch (err) {
    console.error(err);
    } finally {
    await client.end()
    }

}

module.exports = connectDatabase;