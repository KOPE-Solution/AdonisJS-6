import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    public index({response}: HttpContext){
        return response.status(200).json('Okey it is working')
    }
}