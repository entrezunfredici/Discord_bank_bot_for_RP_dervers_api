const router = require('express').Router(), 
accountController = require('../controllers/account')
//route pour obtennir un compte via l'id du bénéficiaire
router.get('/beneficiaryId=:beneficiaryId', accountController.getAccountByBeneficiaryId);
//route pour obtennir un compte via l'id du compte
router.get('/Id=:Id', accountController.getAccountById);
//route pour se connecter
router.post('/login', accountController.accountLogin);
//route pour ajouter un compte
router.post('/add', accountController.addAccount);
//route pour faire une transaction
router.post('/transaction', accountController.accountBalance);
//route pour faire une transaction directe
router.post("/quickTransaction", accountController.quickTransaction);
//route pour supprimer un compte
router.delete('/Id=:Id&userId=:userId', accountController.deleteAccountById)
//route pour supprimer un compte via l'id du bénéficiaire
router.delete('/beneficiaryId=:beneficiaryId', accountController.deleteAccountsByBeneficiaryID)

module.exports = router;