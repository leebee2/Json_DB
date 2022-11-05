const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors');

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 3000

// /!\ Bind the router db to the app
app.db = router.db
app.use(cors());

const rules = auth.rewriter({
    contacts: 640
})

// You must apply the auth middleware before the router
app.use(rules)
app.use(auth)
app.use(router)
app.listen(port)