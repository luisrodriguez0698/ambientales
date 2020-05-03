import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SabiasquePage } from './sabiasque.page';

describe('SabiasquePage', () => {
  let component: SabiasquePage;
  let fixture: ComponentFixture<SabiasquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabiasquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SabiasquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
