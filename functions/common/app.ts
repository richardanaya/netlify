import Koa from 'koa';
import Router from "koa-router";

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'Hi~'
})

app
  .use(router.routes())
  .use(router.allowedMethods())

export {app}