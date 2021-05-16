import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomorrowsForecastPage } from './tomorrows-forecast.page';

describe('TomorrowsForecastPage', () => {
  let component: TomorrowsForecastPage;
  let fixture: ComponentFixture<TomorrowsForecastPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowsForecastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomorrowsForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
