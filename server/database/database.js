const sqlite3 = require('sqlite3').verbose();
const {open} = require('sqlite');

const dbPromise = open({
  filename: './bugtrackerdb.db',
  driver: sqlite3.Database
});

exports.setup =  async() => {
  const db = await dbPromise;
  await db.migrate();
}

