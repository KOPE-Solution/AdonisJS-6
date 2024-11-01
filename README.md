# AdonisJS : Chaper-2 Routing

Reference from [docs.adonisjs.com](https://docs.adonisjs.com/guides/basics/routing)

## Making GET, POST, PUT and DELETE request
start/route/routes.ts :
```ts
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// GET method
router.get('abouts', () => {
    return 'GET method for abouts'
})

// POST method
router.post('abouts', () => {
    return 'POST method for abouts'
})

// PUT method
router.put('abouts/:id', () => {
    return 'PUT method for abouts'
})

// PATCH method
router.patch('abouts/:id', () => {
    return 'PATCH method for abouts'
})

// DELETE method
router.delete('abouts/:id', () => {
    return 'DELETE method for abouts'
})
```

![02](/02.png)

![01](/01.png)

![02](/03.png)

![03](/04.png)

![04](/04.png)

![05](/05.png)

![06](/06.png)

## Current request route, Optional params, Inbuilt matchers
start/route/routes.ts :
```ts
import router from '@adonisjs/core/services/router'
router.where('id', router.matchers.number())

..

router.get('posts/:id?', ({ params, request }) => {
    console.log(request.all())

    const {id} = params
    return `Post with id ${id}`
})
```

![07](/07.png)

![08](/08.png)

## Prefixing routes inside a group
```shell
router
  .group(() => {
    router.get('users', () => {
        return "users"
    })
    router.get('payments', () => {
        return "payments"
    })
  })
  .prefix('/api')
```

![09](/09.png)

![10](/10.png)

---