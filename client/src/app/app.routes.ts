import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NewListComponent } from './lists/new-list/new-list.component';
import { CompletedListsComponent } from './lists/completed-lists/completed-lists.component';
import { CurrentListsComponent } from './lists/current-lists/current-lists.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/:id', component: MemberDetailComponent},
    {path: 'new-list', component: NewListComponent},
    {path: 'current-lists', component: CurrentListsComponent},
    {path: 'completed-lists', component: CompletedListsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
