const fetch = require('node-fetch')
const { formatData } = require('../utils/formatData')
const { localStorage } = require('./storage')
module.exports = {

    loadComments: (req, res) => {


        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('comments', JSON.stringify(data))
            })

        let comments = JSON.parse(localStorage.getItem('comments'))
        res.status(200).json({ message: 'loadComments', comments })

    },

    addComment: (req, res) => {
        const { postId } = req.params
        const { name, email, body } = req.body
        let comments = JSON.parse(localStorage.getItem('comments'))

        let idGenerate = comments.length + 2
        const newComment = { postId, id: idGenerate, name, email, body }

        comments.push(newComment)
        localStorage.setItem('comments', JSON.stringify(comments))

        res.status(200).json({ message: 'nuevo comentario', newComment })

    },

    modifyComment: (req, res) => {
        try {
            let comments = JSON.parse(localStorage.getItem('comments'))
            const { idComment } = req.params
            const { name, email, body } = req.body

            let indexCommentToModify = comments.findIndex(comment => comment.id == idComment)

            if (indexCommentToModify) {
                comments[indexCommentToModify].name = name
                comments[indexCommentToModify].email = email
                comments[indexCommentToModify].body = body
                let comment = comments[indexCommentToModify]

                localStorage.setItem('comments', JSON.stringify(comments))

                res.status(200).json({ message: 'Comentario modificado', comment })
            } else {
                res.status(200).json({ message: 'Este comentario ya no existe' })
            }
        } catch (error) {
            res.status(404).json({ message: 'Este comentario ya no existe' })
        }
    },

    deleteComment: (req, res) => {
        let comments = JSON.parse(localStorage.getItem('comments'))
        const { idComment } = req.params

        let indexCommentToDelete = comments.findIndex(comment => comment.id == idComment)
        if (indexCommentToDelete) {
            comments.splice(indexCommentToDelete, 1)

            let comment = comments[indexCommentToDelete]

            localStorage.setItem('comments', JSON.stringify(comments))
            res.status(200).json({ message: 'Comentario eliminado', comment })
        } else {
            res.status(200).json({ message: 'Este comentario ya fue eliminado' })
        }
    }
}