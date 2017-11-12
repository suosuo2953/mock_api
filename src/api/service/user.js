import User from '../models/user';

const login = async (ctx, next) => {
  console.log(ctx.models.user);
  const postData = ctx.request.body;
  ctx.models.user.find({ username: postData.username }, (err, user) => {
    console.log(user[0]);
  })
  ctx.body = 'Hello World!';
  next();
};

export default {
  login,
};

