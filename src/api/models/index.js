import orm from 'orm';
import settings from '../../config';
import User from './user';

let connection;

const setup = (db, cb) => {
  User(db, cb).sync();
  return cb(null, db);
}

const dbConnect = (cb) => {
  if (connection) {
    return cb(null, connection);
  }

  orm.connect(settings.database, (err, db) => {
    if (err) {
      console.log('Connected database error:', err);
      return cb(err);
    }
    console.log("Connected to database.");
    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup(db, cb);
  });
};

export default dbConnect;