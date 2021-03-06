import {TranslateService} from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langList = ['en', 'cz'];
  currentLang = 'cz';

  constructor(private translate: TranslateService) {
    translate.addLangs(this.langList);
    translate.setDefaultLang(this.currentLang);
  }

  changeLang(lang) {
    this.translate.use(lang.value);
  }
}
