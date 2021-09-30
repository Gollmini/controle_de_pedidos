import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigntarurePage } from './signtarure.page';

describe('SigntarurePage', () => {
  let component: SigntarurePage;
  let fixture: ComponentFixture<SigntarurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigntarurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigntarurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
