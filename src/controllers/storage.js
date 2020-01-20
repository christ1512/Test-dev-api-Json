const {LocalStorage}= require('node-localstorage')
localStorage = new LocalStorage('./scratch')


module.exports ={localStorage}