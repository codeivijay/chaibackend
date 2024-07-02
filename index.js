require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000


const githubData = {
    "login": "codeivijay",
    "id": 105920990,
    "node_id": "U_kgDOBlA53g",
    "avatar_url": "https://avatars.githubusercontent.com/u/105920990?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/codeivijay",
    "html_url": "https://github.com/codeivijay",
    "followers_url": "https://api.github.com/users/codeivijay/followers",
    "following_url": "https://api.github.com/users/codeivijay/following{/other_user}",
    "gists_url": "https://api.github.com/users/codeivijay/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/codeivijay/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/codeivijay/subscriptions",
    "organizations_url": "https://api.github.com/users/codeivijay/orgs",
    "repos_url": "https://api.github.com/users/codeivijay/repos",
    "events_url": "https://api.github.com/users/codeivijay/events{/privacy}",
    "received_events_url": "https://api.github.com/users/codeivijay/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vijay Singh Diggi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "codeivijay",
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 8,
    "created_at": "2022-05-20T10:53:05Z",
    "updated_at": "2024-05-21T13:08:20Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Hello twitter")
})

app.get('/login', (req, res) => {
    res.send("<h1> Please Login at chai aur code </h1>")
})

app.get('/github',(req, res) => {
    res.json(githubData)
})

app.get('/youtube', (req, res) => {
    res.send("<p> This is the youtube page of chai aur code </p>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})