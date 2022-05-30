import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  imgUrl = 'https://dummyimage.com/300';
  data: any;
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      console.log(data.title);
      this.data = data;
      this.titleService.setTitle(this.data.title);

      this.metaService.updateTag({
        name: 'description',
        content: this.data.title,
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
        content: this.data.title,
      });
      this.metaService.updateTag({
        property: 'twitter:image',
        content: this.imgUrl,
      });
      // Facebook
      this.metaService.updateTag({ property: 'og:url', content: '/second' });
      this.metaService.updateTag({ property: 'og:type', content: 'website' });
      this.metaService.updateTag({
        property: 'og:description',
        content: this.data.title,
      });
      this.metaService.updateTag({
        property: 'og:title',
        content: this.data.completed,
      });
      this.metaService.updateTag({
        property: 'og:image',
        content: this.imgUrl,
      });
    });
  }
}
