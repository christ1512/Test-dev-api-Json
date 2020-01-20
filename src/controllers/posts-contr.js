
const fetch = require('node-fetch')
const { formatData } = require('../utils/formatData')
const { localStorage } = require('./storage')
module.exports = {
    loadPost: (req, res) => {


        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('posts', JSON.stringify(data))
            })

        let posts = JSON.parse(localStorage.getItem('posts'))
        res.status(200).json({ message: 'Se han cargado los posts en memoria', posts })

    },

    loadSinglePost: (req, res) => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        let comments = JSON.parse(localStorage.getItem('comments'))
        const { idUser } = req.params

        const singleResultPost = posts.map(dato => {
            let postId = dato.id
            if (dato.userId == idUser) {

                const commentsPosts = comments.map(dato => {
                    if (dato.postId == postId) {
                        return {
                            postId: dato.postId,
                            id: dato.id,
                            name: dato.name,
                            email: dato.email,
                            body: dato.body
                        }
                    } else {
                        return 0
                    }

                })

                return {
                    userId: dato.userId,
                    id: dato.id,
                    title: dato.title,
                    body: dato.body,
                    comments: formatData(commentsPosts)
                }
            } else {
                return 0
            }
        })
        const finalData = formatData(singleResultPost)
        res.status(200).json({ message: 'Se cargaros los posts de un usuario con todos los comentarios', finalData })
    },

    loadUniquePost: (req, res) => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        let comments = JSON.parse(localStorage.getItem('comments'))

        const { idPost } = req.params

        const singleResultPost = posts.map(dato => {

            const commentsPosts = comments.map(dato => {
                if (dato.postId == idPost) {
                    return {
                        postId: dato.postId,
                        id: dato.id,
                        name: dato.name,
                        email: dato.email,
                        body: dato.body
                    }
                } else {
                    return 0
                }

            })

            if (dato.id == idPost) {
                return {
                    userId: dato.userId,
                    id: dato.id,
                    title: dato.title,
                    body: dato.body,
                    comments: formatData(commentsPosts)
                }
            } else {
                return 0
            }
        })
        const finalData = formatData(singleResultPost)
        res.status(200).json({ message: 'Se cargo un unico post con sus comentarios', finalData })

    },


    addPost: (req, res) => {

        const { userId, title, body } = req.body
        let posts = JSON.parse(localStorage.getItem('posts'))

        let idGenerate = posts.length + 2
        const newPost = { userId, id: idGenerate, title, body }

        //const addPostToNewPost={...posts,newPost}
        posts.push(newPost)
        localStorage.setItem('posts', JSON.stringify(posts))

        res.status(200).json({ message: 'nuevo post', newPost })

    },

    modifyPost: (req, res) => {
        try {
            let posts = JSON.parse(localStorage.getItem('posts'))
            const { idPost } = req.params
            const { title, body } = req.body

            let indexPostToModify = posts.findIndex(post => post.id == idPost)

            if (indexPostToModify) {
                posts[indexPostToModify].title = title
                posts[indexPostToModify].body = body
                let post = posts[indexPostToModify]

                localStorage.setItem('posts', JSON.stringify(posts))

                res.status(200).json({ message: 'Post modificado', post })
            } else {
                res.status(200).json({ message: 'Este post ya no existe' })
            }
        } catch (error) {
            res.status(200).json({ message: 'Este post ya no existe' })
        }
    },

    deletePost: (req, res) => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        const { idPost } = req.params

        let indexPostToDelete = posts.findIndex(post => post.id == idPost)
        if (indexPostToDelete) {
            posts.splice(indexPostToDelete, 1)
            let post = posts[indexPostToDelete]

            localStorage.setItem('posts', JSON.stringify(posts))
            res.status(200).json({ message: 'Post eliminado', post })
        } else {
            res.status(200).json({ message: 'Este post ya fue eliminado' })
        }
    }


}