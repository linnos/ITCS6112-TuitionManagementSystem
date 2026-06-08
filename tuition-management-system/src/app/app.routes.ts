import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CourseDisplay } from './course-display/course-display';
import { Header } from './header/header';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'course-display',
        component: CourseDisplay
    }
];
