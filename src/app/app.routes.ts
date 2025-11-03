import { Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { OnlyHeaderComponent } from './layout/only-header/only-header.component';

export const routes: Routes = [
    //   {
    //     path: '',
    //     component: BlankComponent,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'auth',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'auth',
    //             loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    //         }
    //     ]
    // },
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    },
    {
        path: '',
        component: OnlyHeaderComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./modules/inner-pages/inner-pages.module').then(m => m.InnerPagesModule)
            }
        ]
    }
];
