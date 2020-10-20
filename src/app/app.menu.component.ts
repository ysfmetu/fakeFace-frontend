import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

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

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush',
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
                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'], badgeStyleClass: 'text-badge', badge: 'New',
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                    {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'], badge: '20',
                items: [
                    {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                    {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                    {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                    {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                    {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                    {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
                    {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                    {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                    {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']},
                    {label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']},
                    {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error']},
                    {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound']},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access']},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']}
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
            },
            {
                label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
            }
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
