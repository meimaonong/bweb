const Koa = require('koa')

const app = new Koa()

app.use(ctx=>{
    ctx.body="甲苯"
})

app.listen(3008, () => {
    console.log('start at 3008')
})