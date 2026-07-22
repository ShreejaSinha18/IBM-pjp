import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: Todos
    },
    {
        path: 'users',
        component: Users
    }
];
