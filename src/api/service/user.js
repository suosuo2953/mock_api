
const login = async (ctx, next) => {
  ctx.body = 'Hello World!';
  next();
};

export default {
  login,
};

