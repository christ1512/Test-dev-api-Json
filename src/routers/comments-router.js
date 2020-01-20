const {Router}= require('express')
const router=Router()
const {loadComments,addComment, modifyComment,deleteComment}=require('../controllers/comments-contr')

router.route('/comments')
.get(loadComments)

router.route('/addComments/:postId')
.post(addComment)

router.route('/modifyComments/:idComment')
.put(modifyComment)

router.route('/deleteComments/:idComment')
.delete(deleteComment)


module.exports=router