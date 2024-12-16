import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateListComponent } from './lists/create-list/create-list.component';
import { CompletedListsComponent } from './lists/completed-lists/completed-lists.component';
import { CurrentListsComponent } from './lists/current-lists/current-lists.component';
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
            {path: 'create-list', component: CreateListComponent},
            {path: 'current-lists', component: CurrentListsComponent},
            {path: 'completed-lists', component: CompletedListsComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
