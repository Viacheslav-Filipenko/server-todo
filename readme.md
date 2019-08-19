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
            "id": 49,
            "description": "1603vv01",
            "completed": false,
            "user_id": 2,
            "dueDate": null,
            "endDate": null,
            "createdAt": "2019-08-16T14:36:39.843Z",
            "updatedAt": "2019-08-16T14:36:39.843Z"
        },
        {
            "id": 51,
            "description": "security",
            "completed": false,
            "user_id": 2,
            "dueDate": null,
            "endDate": null,
            "createdAt": "2019-08-19T00:15:56.203Z",
            "updatedAt": "2019-08-19T00:21:39.594Z"
        },
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
https://auth-todo-training.herokuapp.com/api/todos/55
```

#### Sample Response

```
json
{
    "data": {
        "id": 55,
        "description": "test 2",
        "completed": false,
        "user_id": 2,
        "dueDate": null,
        "endDate": null,
        "createdAt": "2019-08-19T08:17:22.202Z",
        "updatedAt": "2019-08-19T08:17:22.202Z"
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
        "id": 54,
        "completed": false,
        "description": "test",
        "user_id": 2,
        "dueDate": null,
        "updatedAt": "2019-08-19T08:17:04.852Z",
        "createdAt": "2019-08-19T08:17:04.852Z",
        "endDate": null
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
https://auth-todo-training.herokuapp.com/api/todos/55/complete
```


#### Sample Response

```
json
{
    "data": {
        "id": 55,
        "description": "test 2",
        "completed": true,
        "user_id": 2,
        "dueDate": null,
        "endDate": "2019-08-19T08:20:25.057Z",
        "createdAt": "2019-08-19T08:17:22.202Z",
        "updatedAt": "2019-08-19T08:20:25.136Z"
    }
}


```

## Uncomplete todo 

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}/uncomplete
```

#### Required Parameters

| Field | Type  | Description              |
| ----- | ----- | ------------------------ |
| id    | [int] | The id of todo to uncomplete |

#### HTTP Method

PUT


#### Sample Request

```
https://auth-todo-training.herokuapp.com/api/todos/55/uncomplete
```

#### Sample Response

```
json
{
    "data": {
        "id": 55,
        "description": "test 2",
        "completed": false,
        "user_id": 2,
        "dueDate": null,
        "endDate": null,
        "createdAt": "2019-08-19T08:17:22.202Z",
        "updatedAt": "2019-08-19T08:20:48.115Z"
    }
}


```

## Update todo

#### URI

```
https://auth-todo-training.herokuapp.com/api/todos/{id}
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
https://auth-todo-training.herokuapp.com/api/todos/55
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
        "id": 55,
        "description": "update test",
        "completed": false,
        "user_id": 2,
        "dueDate": null,
        "endDate": null,
        "createdAt": "2019-08-19T08:17:22.202Z",
        "updatedAt": "2019-08-19T08:21:22.539Z"
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
https://auth-todo-training.herokuapp.com/api/todos/55
```

#### Sample Response

```
json
{
}

```
