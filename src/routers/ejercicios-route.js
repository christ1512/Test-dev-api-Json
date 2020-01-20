const {Router}= require('express')
const router=Router()
const {palabra,moda}=require('../otros-ejercicios/ejercicios')

router.route('/palabra/:palabra/:limite')
.get(palabra)

router.route('/moda/:numeros')
.get(moda)

module.exports=router