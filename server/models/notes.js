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

async function getSpecificUserNotes(userid) {
  let sql = `SELECT * FROM UserNotes 
      WHERE UserId = "${userid}"`
  return await con.query(sql)
}

// let usernotes =
// {
//     UserId: "5",
//     NotesId: "Notes-009",
//     NotesDetail: "Check the Notes backend"
// }
// addnotes(usernotes)

async function addnotes(usernotes) {
  let sql = `
      INSERT INTO UserNotes(UserId,NotesId,NotesDetail)
      VALUES("${usernotes.UserId}","${usernotes.NotesId}","${usernotes.NotesDetail}");`
  await con.query(sql);
  return await getSpecificUserNotes(usernotes.UserId)
}

module.exports = { getAllNotes, getSpecificUserNotes, addnotes }