import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbiacionesPage } from './ubiaciones.page';

describe('UbiacionesPage', () => {
  let component: UbiacionesPage;
  let fixture: ComponentFixture<UbiacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbiacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbiacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
