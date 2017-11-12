const User = (db, cb) => {
  return db.define('user', {
    id: { type: 'serial', key: true },
    username : { type: 'text', size: 100, unique: true, required: true },
    password: { type: 'text', size: 100, required: true },
    createdAt : { type: 'date', required: true, time: true },
  }, {
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    },
  });
};

export default User;