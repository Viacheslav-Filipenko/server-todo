# Todo server

## Get todos

Retrieve all todos.

### URI

```
https://todo-training.herokuapp.com/todos
```

### HTTP Method

GET

### Required Parameters

(none)

### Sample Request

```
https://todo-training.herokuapp.com/todos
```

### Sample Response

```
json
{
    "data": [
        {
            "id": 1,
            "description": "todo",
            "completed": false,
            "createdAt": "2019-08-13T10:34:58.089Z",
            "updatedAt": "2019-08-13T10:34:58.089Z"
        },
        {
            "id": 2,
            "description": "new todo",
            "completed": false,
            "createdAt": "2019-08-13T10:35:54.470Z",
            "updatedAt": "2019-08-13T10:35:54.470Z"
        }
    ]
}

```

## Get todo

Retrieve one todo.

### URI

```
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

GET

### Required Parameters

| Field | Type  | Description                         |
| ----- | ----- | ----------------------------------- |
| id    | [int] | The id of element which is returned |

### Sample Request

```
https://todo-training.herokuapp.com/todos/1
```

### Sample Response

```
json
{
    "data": {
        "id": 1,
        "description": "todo",
        "completed": false,
        "createdAt": "2019-08-13T10:34:58.089Z",
        "updatedAt": "2019-08-13T10:34:58.089Z"
    }
}

```

## Add todo

Add todo to the todo list.

### URI

```
https://todo-training.herokuapp.com/todos/{id}
```
### HTTP Method

POST

### Required Parameters

| Field | Type  | Description                         |
| ----- | ----- | ----------------------------------- |
| description    | [string] | the description of todo |

### Sample Request

```
https://todo-training.herokuapp.com/todos
```

### Sample Response

```
json
{
    "data": 1
}

```

## Update todo

### URI

```
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

PUT

### Required Parameters

| Field | Type  | Description                         |
| ----- | ----- | ----------------------------------- |
| id    | [int] | The id of element which is returned |

### Sample Request

```
https://todo-training.herokuapp.com/todos/1
```

### Sample Response

```
json
{
    "data": 1
}

```

## Delete todo

### URI

```
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

DELETE

### Required Parameters

| Field | Type  | Description                         |
| ----- | ----- | ----------------------------------- |
| id    | [int] | The id of element which is returned |

### Sample Request

```
https://todo-training.herokuapp.com/todos/1
```

### Sample Response

```
json
{
    "data": 1
}

```
