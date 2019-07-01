import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUrl = '';
    constructor(private router: Router) {
        // trigger event when page changed
        this.router.events
            .subscribe((event) => {
                this.onRouterChange(event);
            });
    }

    ngOnInit() {
    }

    open(url){
        this.router.navigate([url]);
    }

    /**
       * Event when page changed
       * @param event 
       */
    onRouterChange(event) {
        if (event instanceof NavigationEnd) {
            this.currentUrl = event.urlAfterRedirects;
        }
    }
}
