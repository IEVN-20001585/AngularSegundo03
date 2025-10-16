import { Routes } from '@angular/router';

export default [
 {
        path:'sign-up',
        loadComponent:()=> import('./sign-up/sign-up.component').then(c=>c.SingUpComponent)
    },
{
    path:'sign-in',
    loadComponent:()=> import('./sign-in/sign-in.component').then(c=>c.SingInComponent)
}

]as Routes
