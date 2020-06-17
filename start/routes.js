'use strict'
const Route = use('Route');
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
Route.group(() => {
  Route.get('/usuarios', 'UserController.index');
  Route.post('/usuarios', 'UserController.create');
  Route.post('/usuario', 'UserController.show'); 
})
  .prefix('api/v1');

  
