import express from 'express'

import { editUser, getUsers, login, signUp } from '../controllers/userController.js'
import { createProduct, editProduct, listProducts } from '../controllers/productController.js'
import { addToCart, makeOrder, removeFromCart } from '../controllers/cartController.js'

const router  = express.Router()

router.post('/signup', signUp)
router.post('/login', login)
router.get('/getUsers', getUsers)
router.post('/editUser', editUser)
router.post('/createProduct', createProduct)
router.post('/editProduct', editProduct)
router.get('/listProducts', listProducts)
router.post('/addToCart', addToCart)
router.post('/removeFromCart', removeFromCart)
router.post('/makeOrder', makeOrder)
export default router