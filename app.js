const express = require('express')
const app = express()

// Force express to convert all requests entities as json (for body)
app.use(express.json())

/* For allow to user 
    pour ajouter un router au serveur il est nécéssaire d'utiliser les deux commandes suivantes:
    et remplacer <router> par le nom de votre routeur
    yourRouter par le nom que vous voulez
    et yourService par le nom de votre service
    const booksRouter = require('./routers/<router>')
*/

module.exports = app