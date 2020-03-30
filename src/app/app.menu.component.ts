import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
		<ul class="layout-menu">
			<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
		</ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: '20',
                items: [
                    {
                        label: 'Solid',
                        icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Blue', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('blue', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('blue', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('blue', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('cyan', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('cyan', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('cyan', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Green', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('green', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('green', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('green', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Yellow', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('yellow', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('yellow', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('yellow', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Purple', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('purple', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('purple', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('purple', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('pink', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('pink', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('pink', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Blue Grey', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('bluegrey', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('bluegrey', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('bluegrey', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Teal', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('teal', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('teal', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('teal', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Orange', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('orange', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('orange', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('orange', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Grey', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('grey', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('grey', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('grey', 'gradient')
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Special',
                        icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Cappuccino', icon: 'fa fa-fw fa-picture-o',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('cappuccino', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('cappuccino', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('cappuccino', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Montreal', icon: 'fa fa-fw fa-picture-o',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('montreal', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('montreal', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('montreal', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Hollywood', icon: 'fa fa-fw fa-picture-o',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('hollywood', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('hollywood', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('hollywood', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Peak', icon: 'fa fa-fw fa-picture-o',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('peak', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('peak', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('peak', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Alive', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('alive', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('alive', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('alive', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Emerald', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('emerald', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('emerald', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('emerald', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Ash', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('ash', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('ash', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('ash', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Noir', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('noir', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('noir', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('noir', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Mantle', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('mantle', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('mantle', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('mantle', 'gradient')
                                    }
                                ]
                            },
                            {
                                label: 'Predawn', icon: 'fa fa-fw fa-certificate',
                                items: [
                                    {
                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                        command: (event) => this.changeTheme('predawn', 'light')
                                    },
                                    {
                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('predawn', 'dark')
                                    },
                                    {
                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                        command: (event) => this.changeTheme('predawn', 'gradient')
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Menu Modes', icon: 'fa fa-fw fa-bars' ,
                items: [
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.layoutMode = 'static'},
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.layoutMode = 'overlay'},
                    {label: 'Slim Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.layoutMode = 'slim'},
                    {label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.layoutMode = 'horizontal'}
                ]
            },
            {
                label: 'Mega Menu', icon: 'fa fa-fw fa-bars' , badgeStyleClass: 'text-badge', badge: 'New',
                items: [
                    {label: 'Light Menu', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.megaMenuMode = 'light'},
                    {label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.megaMenuMode = 'dark'},
                    {label: 'Gradient Menu', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.megaMenuMode = 'gradient'}
                ]
            },
            {
                label: 'User Menu', icon: 'fa fa-fw fa-user' ,
                items: [
                    {label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.profileMode = 'inline'},
                    {label: 'Top Profile', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.profileMode = 'top'}
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-sitemap', routerLink: ['/components'],
                items: [
                    {label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/components/sample']},
                    {label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/components/forms']},
                    {label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/components/data']},
                    {label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/components/panels']},
                    {label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/components/overlays']},
                    {label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/components/menus']},
                    {label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/components/messages']},
                    {label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/components/charts']},
                    {label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/components/file']},
                    {label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/components/misc']}
                ]
            },
            {label: 'Landing', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank'},
            {
                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver', routerLink: ['/pages'],
                items: [
                    {label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/pages/empty']},
                    {label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank'},
                    {label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle',
                        url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation']}
        ];
    }

    changeTheme(theme: string, scheme: string) {
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');

        this.app.menuMode = scheme;
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
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
}
