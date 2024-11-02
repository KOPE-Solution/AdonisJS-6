# AdonisJS : Chaper-4 View

Reference from [docs.adonisjs.com](https://docs.adonisjs.com/guides/views-and-templates/edgejs)

## Rendering your first template
```shell
node ace make:view index
DONE:    create resources/views/index.edge

node ace make:view posts/index 
DONE:    create resources/views/posts/index.edge
```

resources/views/posts/index.edge :
```html
<h1>This is message from views on posts folder.</h1>
```

app/controllers/post_controller.ts :
```ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    async index({response, view}: HttpContext) {
        const html = await view.render('posts/index')
        return html
    }
}
```

![01](/01.png)


## Passing data to the view and conditionals

Reference from [edgejs.dev](https://edgejs.dev/docs/conditionals) 

resources/views/posts/index.edge :
```html
<h1>{{title}}</h1>
<h1>{{post.name}}</h1>

@if(post.hidden)
  <h1> Post is hidden </h1>
@end

@if(post.hidden)
  <p> Post is hidden </p>
@else
  <p> Post is public </p>
@end

<table>
    {{--  table headers  --}}
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Hidden</th>
    </tr>

    {{--  render data  --}}
    @each((post, index) in posts)
      <tr>
        <td>{{ index }}</td>

        <td>{{ post.name}}</td>

        <td>
          @if(post.hidden)
            <p> Post is hidden </p>
          @else
            <p> Post is public </p>
          @end
        </td>
      </tr>
    @endeach
</table>

@each((key, value) in food)
  <p>The key is {{ key }} and the value is {{ value }} </p>
@endeach

<h1>This is message from views on posts folder.</h1>
```


app/controllers/post_controller.ts :
```ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ view }: HttpContext) {
    const post = {
      id: 1,
      name: 'Cars',
      hidden: false,
    }

    const posts = [
      {
        id: 1,
        name: 'Movies',
        hidden: true,
      },
      {
        id: 2,
        name: 'Bikes',
        hidden: true,
      },
      {
        id: 3,
        name: 'Computers',
        hidden: false,
      },
    ]

    const food = {
      ketchup: '5 tbsp',
      mustard: '1 tbsp',
      pickle: '0 tbsp',
    }
    

    const html = await view.render('posts/index', { title: 'Post index page', post, posts, food })
    return html
  }
}
```

![02](/02.png)

## Layouts



---