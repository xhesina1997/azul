import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(private title: Title, private meta: Meta) {}

    public setSeoTags(titleContent, imageUrl, descriptionContent, keywordsContent, url){
        this.title.setTitle(titleContent);
        this.meta.updateTag({name: 'description', content: descriptionContent});
        this.meta.updateTag({name: 'keywords', content: keywordsContent});

        //google
        this.meta.updateTag({itemprop: 'name', content: titleContent});
        this.meta.updateTag({itemprop: 'description', content: descriptionContent});
        this.meta.updateTag({itemprop: 'image', content: imageUrl});

        //facebook
        this.meta.updateTag({property: 'og-url', content: url});
        this.meta.updateTag({property: 'og-title', content: titleContent});
        this.meta.updateTag({property: 'og-description', content: descriptionContent});
        this.meta.updateTag({property: 'og-image', content: imageUrl});
        this.meta.updateTag({property: 'og-type', content: "website"});

        //twitter
        this.meta.updateTag({name: 'twitter:card', content: "summary_large_image"});
        this.meta.updateTag({name: 'twitter:title', content: titleContent});
        this.meta.updateTag({name: 'twitter:description', content: descriptionContent});
        this.meta.updateTag({name: 'twitter:image', content: imageUrl});

    }

}
