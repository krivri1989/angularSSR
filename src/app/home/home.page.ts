import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({
      name: 'description',
      content: 'The Devdactic SSR Page',
    });
    // Twitter
    this.metaService.updateTag({
      property: 'twitter:card',
      content: 'summary_large_image',
    });
    this.metaService.updateTag({
      property: 'twitter:title',
      content: 'NEW ARTICLE OUT NOW',
    });
    this.metaService.updateTag({
      property: 'twitter:description',
      content: 'Check out this cool article',
    });
    this.metaService.updateTag({
      property: 'twitter:image',
      content:
        'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.png?w=1620&ssl=1',
    });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: '/second' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'My Ionic SSR Page',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'My SSR Title!',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content:
        'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.png?w=1620&ssl=1',
    });
  }
}
