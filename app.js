const Logoran = require('logoran');
const app = new Logoran();

app.use((ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});


// response
app.use(ctx => {
  ctx.body = 'Hello Logoran in app.js';
});

app.listen(3000);