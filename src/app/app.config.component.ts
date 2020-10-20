import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <h5>Input Style</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-radiobutton">
                    <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                    <label for="inputStyle1">Outlined</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                    <label for="inputStyle2">Filled</label>
                </div>
            </div>

            <h5>Ripple Effect</h5>
            <p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>

            <h5>Menu Type</h5>
            <div class="p-grid">
                <div class="p-col-6">
                    <div class="p-field-radiobutton">
                        <p-radioButton name="layoutMode" value="static" [(ngModel)]="app.layoutMode" inputId="layoutMode1"></p-radioButton>
                        <label for="layoutMode1">Static</label>
                    </div>
                </div>
                <div class="p-col-6">
                <div class="p-field-radiobutton">
                    <p-radioButton name="layoutMode" value="overlay" [(ngModel)]="app.layoutMode" inputId="layoutMode2"></p-radioButton>
                    <label for="layoutMode2">Overlay</label>
                </div>
                </div>
                <div class="p-col-6">
                <div class="p-field-radiobutton">
                    <p-radioButton name="layoutMode" value="slim" [(ngModel)]="app.layoutMode" inputId="layoutMode3"></p-radioButton>
                    <label for="layoutMode3">Slim</label>
                </div>
                </div>
                <div class="p-col-6">
                <div class="p-field-radiobutton">
                    <p-radioButton name="layoutMode" value="horizontal" [(ngModel)]="app.layoutMode" inputId="layoutMode4"></p-radioButton>
                    <label for="layoutMode4">Horizontal</label>
                </div>
                </div>
            </div>

            <h5>Menu Color</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="light" [(ngModel)]="app.menuMode" inputId="menuMode1"></p-radioButton>
                <label for="menuMode1">Light</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="dark" [(ngModel)]="app.menuMode" inputId="menuMode2"></p-radioButton>
                <label for="menuMode2">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="gradient" [(ngModel)]="app.menuMode" inputId="menuMode3"></p-radioButton>
                <label for="menuMode3">Gradient</label>
            </div>

            <h5>MegaMenu Color</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="megaMenuMode" value="light" [(ngModel)]="app.megaMenuMode" inputId="megaMenuMode1"></p-radioButton>
                <label for="megaMenuMode1">Light</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="megaMenuMode" value="dark" [(ngModel)]="app.megaMenuMode" inputId="megaMenuMode2"></p-radioButton>
                <label for="megaMenuMode2">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="megaMenuMode" value="gradient" [(ngModel)]="app.megaMenuMode" inputId="megaMenuMode3"></p-radioButton>
                <label for="megaMenuMode3">Gradient</label>
            </div>

            <h5>User Menu Type</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-radiobutton">
                    <p-radioButton name="profileMode" value="inline" [(ngModel)]="app.profileMode" inputId="profileMode1"></p-radioButton>
                    <label for="profileMode1">Inline</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="profileMode" value="Top" [(ngModel)]="app.profileMode" inputId="profileMode2"></p-radioButton>
                    <label for="profileMode2">Top</label>
                </div>
            </div>

            <h5>Component Themes</h5>
            <div class="layout-themes">
                <div *ngFor="let theme of componentThemes">
                    <a style="cursor: pointer" (click)="changeComponentTheme(theme.name)" [ngStyle]="{'background-color': theme.color}"></a>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    menuThemes: any[];

    componentThemes: any[];

    componentTheme = 'blue';

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.componentThemes = [
            {name: 'blue', color: '#42A5F5'},
            {name: 'green', color: '#66BB6A'},
            {name: 'lightgreen', color: '#9CCC65'},
            {name: 'purple', color: '#AB47BC'},
            {name: 'deeppurple', color: '#7E57C2'},
            {name: 'indigo', color: '#5C6BC0'},
            {name: 'orange', color: '#FFA726'},
            {name: 'cyan', color: '#26C6DA'},
            {name: 'pink', color: '#EC407A'},
            {name: 'teal', color: '#26A69A'}
        ];

        this.menuThemes = [
            {name: 'white', color: '#ffffff', logoColor: 'dark', componentTheme: null},
            {name: 'darkgray', color: '#343a40', logoColor: 'white', componentTheme: null},
            {name: 'blue', color: '#1976d2', logoColor: 'white', componentTheme: 'blue'},
            {name: 'bluegray', color: '#455a64', logoColor: 'white', componentTheme: 'lightgreen'},
            {name: 'brown', color: '#5d4037', logoColor: 'white', componentTheme: 'cyan'},
            {name: 'cyan', color: '#0097a7', logoColor: 'white', componentTheme: 'cyan'},
            {name: 'green', color: '#388e3C', logoColor: 'white', componentTheme: 'green'},
            {name: 'indigo', color: '#303f9f', logoColor: 'white', componentTheme: 'indigo'},
            {name: 'deeppurple', color: '#512da8', logoColor: 'white', componentTheme: 'deeppurple'},
            {name: 'orange', color: '#F57c00', logoColor: 'dark', componentTheme: 'orange'},
            {name: 'pink', color: '#c2185b', logoColor: 'white', componentTheme: 'pink'},
            {name: 'purple', color: '#7b1fa2', logoColor: 'white', componentTheme: 'purple'},
            {name: 'teal', color: '#00796b', logoColor: 'white', componentTheme: 'teal'},
        ];
    }

    changeColorScheme(scheme) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + scheme + '.css', 1);
        this.changeStyleSheetsColor('theme-css', 'theme-' + scheme + '.css', 1);

        const mobileLogoLink: HTMLImageElement = document.getElementById('logo-mobile') as HTMLImageElement;
        const invoiceLogoLink: HTMLImageElement = document.getElementById('invoice-logo') as HTMLImageElement;
        const footerLogoLink: HTMLImageElement = document.getElementById('footer-logo') as HTMLImageElement;

        if (scheme === 'light') {
            mobileLogoLink.src = 'assets/layout/images/logo-dark.svg';
            invoiceLogoLink.src = 'assets/layout/images/logo-dark.svg';
            footerLogoLink.src = 'assets/layout/images/logo-dark.svg';
        }
        else {
            mobileLogoLink.src = 'assets/layout/images/logo-white.svg';
            invoiceLogoLink.src = 'assets/layout/images/logo-white.svg';
            footerLogoLink.src = 'assets/layout/images/logo-white.svg';
        }
    }

    changeMenuTheme(name, logoColor, componentTheme) {
        this.changeStyleSheetsColor('theme-css', componentTheme, 2);

        const appLogoLink: HTMLImageElement = document.getElementById('app-logo') as HTMLImageElement;

        if (logoColor === 'dark') {
            appLogoLink.src = 'assets/layout/images/logo-dark.svg';
        }
        else {
            appLogoLink.src = 'assets/layout/images/logo-white.svg';
        }
    }

    changeComponentTheme(theme) {
        this.changeStyleSheetsColor('theme-css', theme, 3);
    }

    changeStyleSheetsColor(id, value, from) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');

        if (from === 1) {           // which function invoked this function
            urlTokens[urlTokens.length - 1] = value;
        }
        else if (from === 2) {       // which function invoked this function
            if (value !== null) {
                urlTokens[urlTokens.length - 2] = value;
            }
        }
        else if (from === 3) {       // which function invoked this function
            urlTokens[urlTokens.length - 2] = value;
        }

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        this.app.configClick = true;
        event.preventDefault();
    }
}
