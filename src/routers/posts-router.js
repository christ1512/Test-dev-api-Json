const {Router}= require('express')
const router=Router()
const {loadPost,loadSinglePost,loadUniquePost,addPost,modifyPost,deletePost}=require('../controllers/posts-contr')

router.route('/posts')
.get(loadPost)

router.route('/postsSingleUser/:idUser')
.get(loadSinglePost)

router.route('/postsUnique/:idPost')
.get(loadUniquePost)

router.route('/addPost')
.post(addPost)

router.route('/modifyPost/:idPost')
.put(modifyPost)

router.route('/deletePost/:idPost')
.delete(deletePost)

module.exports=router