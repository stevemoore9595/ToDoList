import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/:id', component: MemberDetailComponent},
    {path: 'messages', component: MessagesComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'members/:id', component: MemberDetailComponent},
            {path: 'my-lists', component: ToDoListComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
