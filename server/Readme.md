API Routes:

Default Route: "http://localhost:3500"

(/blog)
|
|----> GET BLOG's
|----> POST
|----> PUT
|----> DELETE
|----> (/id) -> POST To GET BLOG WITH ID ( json-> \_id as parameter)
|----> (/user) -> POST To GET BLOG's WITH AUTHOR ID ( json-> \_id as parameter)

(/user)
|
|----> GET
|----> POST
|----> PUT
|----> DELETE

(/login)
|
|----> POST -> TO LOGIN {email, password}
