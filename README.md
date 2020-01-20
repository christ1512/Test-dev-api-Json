# Test-dev-api-Json

Api de jsonplaceholder

# Rutas para probarla con Postman

1. Cargar los post primero
http://localhost:4000/jsonplaceholder/posts

2. Cargar los comments
http://localhost:4000/jsonplaceholder/comments

3. Agregar un post nuevo
http://localhost:4000/jsonplaceholder/addPost
(recuerde agregar en formato json el cuerpo de la peticion en Postman)

4. Modificar post
http://localhost:4000/jsonplaceholder/modifyPost/:id del post que desea modificar
(recuerde agregar en formato json el cuerpo de la peticion en Postman)

5. Eliminar post
http://localhost:4000/jsonplaceholder/deletePost/:id del post que desea eliminar

6. Ver los post de un unico usuario
http://localhost:4000/jsonplaceholder/postsSingleUser/:"id del usuario del cual deseamos ver sus post

7. Ver un unico post con su autor y comentarios
http://localhost:4000/jsonplaceholder/postsUnique/:id del post que desea ver
 
8. Agregar un comentario a algun post
http://localhost:4000/jsonplaceholder/addComments/:el id del post al cual le vamos a dejar un comentario

9. Modificar comentario
http://localhost:4000/jsonplaceholder/modifyComments/:id del comentario a modificar

10. Eliminar comentario
http://localhost:4000/jsonplaceholder/deleteComments/:id del comentario a eliminar

# Ojo-  La CARPETA "otros ejercicios" comtienen los ejercicios resultos de un recorrepalabra y el numero que mas se repite (moda)
Ademas son accesibles des de la api mediante las rutas:

#Para el ejercicio del recorre palabras con limite
http://localhost:4000/ejercios/palabra/aaaaaabbbbbbbccc/3

Se recibe como parametro aaaaaabbbbbbbccc y posteriormente un limite de 3 letras

#Para el jercicio de la moda
http://localhost:4000/ejercios/moda/1,1,12,1,4,4,4,2,2,2,2
