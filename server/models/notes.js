const con = require("./db_connect")

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS UserNotes (
    SNo INT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,
    NotesId VARCHAR(255) NOT NULL,
    NotesDetail VARCHAR(255) NOT NULL,
    CreatedOn DATETIME DEFAULT CURRENT_TIMESTAMP, 
    CONSTRAINT SNopk PRIMARY KEY(SNo)
  );`
    await con.query(sql);
}

createTable()

async function getAllNotes() {
    let sql = `SELECT * FROM UserNotes;`
    return await con.query(sql)
}

module.exports = { getAllNotes }