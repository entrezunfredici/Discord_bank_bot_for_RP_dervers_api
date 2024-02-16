const express = require('express')
const app = express()
const OpenApiValidator = require('express-openapi-validator') // Module pour valider automatiquement les requêtes

// Force express to convert all requests entities as json (for body)
//app.use(cors());
app.use(express.json())

// Middleware d'openAPI
app.use(
    OpenApiValidator.middleware({
        apiSpec: './open-api.yaml',
        ignoreUndocumented: true
    })
)

/* For allow to user 
    pour ajouter un router au serveur il est nécéssaire d'utiliser les deux commandes suivantes:
    et remplacer <router> par le nom de votre routeur
    yourRouter par le nom que vous voulez
    et yourService par le nom de votre service
    const yourRouter = require('./routers/<router>')
    app.use('/<router>', yourRouter)
*/

//router pour les comptes bacaaires
const accountRouter = require('./routers/account')
app.use('/account', accountRouter)


module.exports = app