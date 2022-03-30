import {Component} from '@angular/core';
import { AppMainComponent} from './app.main.component';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
    selector: 'app-inline-profile',
    template: `
        <div class="user-profile">
            <a href="#" (click)="onProfileClick($event)" id="sidebar-profile-button">
                <img src="assets/layout/images/user-vector2.png" alt="california-layout"/>
                <span class="sidebar-profile-name">Uğur POLAT</span>
                <span class="sidebar-profile-role">Memur</span>
            </a>

            <ul id="sidebar-usermenu" class="usermenu" [ngClass]="{'usermenu-active':app.usermenuActive}"
                [@menu]="app.isSlim()? app.usermenuActive ? 'visible' : 'hidden' :
                app.usermenuActive ? 'visibleAnimated' : 'hiddenAnimated'">
                <li #profile [ngClass]="{'menuitem-active':app.activeProfileItem === profile}">
                    <a href="#" (click)="onProfileItemClick($event,profile)">
                        <i class="pi pi-fw pi-user"></i>
                        <span class="topbar-item-name">Profil</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
    animations: [
        trigger('menu', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*'
            })),
            state('hidden', style({
                height: '0px'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppProfileComponent {

    constructor(public app: AppMainComponent) {}

    onProfileClick(event) {
        this.app.usermenuClick = true;
        this.app.usermenuActive = !this.app.usermenuActive;
        event.preventDefault();
    }

    onProfileItemClick(event, item) {
        this.app.usermenuClick = true;
        if (this.app.activeProfileItem === item) {
            this.app.activeProfileItem = null; } else {
            this.app.activeProfileItem = item; }

        event.preventDefault();
    }

    onProfileSubItemClick(event) {
        event.preventDefault();
    }
}
