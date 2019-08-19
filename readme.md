# Todo server

- [Auth](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#auth)
 - [Login](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#login)
 - [Register](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#register)
- [Api](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#api)
 - [Get todos](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#get-todos)
 - [Get todo](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#get-todo)
 - [Complete todo](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#complete-todo)
 - [Uncomplete todo](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#uncomplete-todo)
 - [Update todo](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#update-todo)
 - [Delete todo](https://github.com/Viacheslav-Filipenko/server-todo/tree/auth#delete-todo)

#Auth

## Login 

#### URI

```
https://auth-todo-training.herokuapp.com/auth/login
```

#### Required Parameters

| Field | Type  | Description           |
| ----- | ----- | --------------------- |
| email    | [string] | The email of user |
| password    | [string] | The password of user |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/auth/login
```

```
json
{
    "email": "some email",
    "password": "some password"
}
```

#### Sample Response

```
json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY2MjAwNTUyfQ.oe-ZWZ4opbs6voG4YYeQRJVDfFfX_fg_iuobbdX_A_Q"
}

```

## Register 

#### URI

```
https://auth-todo-training.herokuapp.com/auth/register
```

#### Required Parameters

| Field | Type  | Description           |
| ----- | ----- | --------------------- |
| email    | [string] | The email of user |
| password    | [string] | The password of user |
| firstName    | [string] | The first name of user |
| lastName    | [string] | The last name of user |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/auth/register
```

```
json
{
    "firstName":"some first name",
    "lastName":"some first name",
    "email": "some email",
    "password": "some password"
}
```

#### Sample Response

```
json
{
}

```

#Api

## Get todos

Retrieve all todos.

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos
```

#### HTTP Method

GET

#### Required Parameters

(none)

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos
```

#### Sample Response

```
json
{
    "data": [
        {
           "id": 1,
            "description": "todo",
            "completed": false,
            "dueDate": null
            "updatedAt": "2019-08-13T11:53:05.551Z",
            "createdAt": "2019-08-13T11:53:05.551Z"
        },
        {
            "id": 2,
            "description": "todo",
            "completed": false,
            "dueDate": null
            "updatedAt": "2019-08-13T11:53:05.551Z",
            "createdAt": "2019-08-13T11:53:05.551Z"
        }
    ]
}

```

## Get todo

Retrieve one todo.

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}
```

#### HTTP Method

GET

#### Required Parameters

| Field | Type  | Description           |
| ----- | ----- | --------------------- |
| id    | [int] | The id of todo to get |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/1
```

#### Sample Response

```
json
{
    "data": {
        "id": 1,
        "description": "todo",
        "completed": false,
        "dueDate": null
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}

```

## Add todo

Add todo to the todo list.

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos
```

#### HTTP Method

POST

#### Required Parameters

| Field       | Type     | Description             |
| ----------- | -------- | ----------------------- |
| description | [string] | the description of todo |

#### Optional Parameters
| Field       | Type     | Description             |
| ----------- | -------- | ----------------------- |
| dueDate | [date] | the due date for todo |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos
```

```
json
{
	"description": "todo"
}
```

#### Sample Response

```
json
{
    "data": {
        "id": 1,
        "description": "todo",
        "completed": false,
        "dueDate": null,
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}


```

## Complete todo 

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}/complete
```

#### Required Parameters

| Field | Type  | Description              |
| ----- | ----- | ------------------------ |
| id    | [int] | The id of todo to complete |

#### HTTP Method

PUT

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/{id}/complete
```


#### Sample Response

```
json
{
    "data": {
        "id": 2,
        "description": "todo",
        "completed": true,
        "dueDate": null,
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}


```

## Uncomplete todo 

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}/complete
```

#### Required Parameters

| Field | Type  | Description              |
| ----- | ----- | ------------------------ |
| id    | [int] | The id of todo to uncomplete |

#### HTTP Method

PUT


#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/{id}/complete
```

#### Sample Response

```
json
{
    "data": {
        "id": 2,
        "description": "todo",
        "completed": true,
        "dueDate": null,
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}


```

## Update todo

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}
```

```
https://auth-todo-training.herokuapp.com/api/todos/1/complete
```



#### HTTP Method

PUT

#### Required Parameters

| Field | Type  | Description              |
| ----- | ----- | ------------------------ |
| id    | [int] | The id of todo to update |
| description | [string] | the description of todo |

#### Optional Parameters
| Field       | Type     | Description             |
| ----------- | -------- | ----------------------- |
| dueDate | [date] | the due date for todo |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/1
```

```
json
{
    "description": "todo",
    "completed": true
}
```

#### Sample Response

```
json
{
    "data": {
        "id": 2,
        "description": "todo",
        "completed": true,
        "dueDate": null,
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}


```

## Delete todo

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}
```

#### HTTP Method

DELETE

#### Required Parameters

| Field | Type  | Description              |
| ----- | ----- | ------------------------ |
| id    | [int] | The id of todo to delete |

#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/1
```

#### Sample Response

```
json
{
}

```
