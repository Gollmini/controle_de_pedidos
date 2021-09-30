import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrucoesPage } from './instrucoes.page';

describe('InstrucoesPage', () => {
  let component: InstrucoesPage;
  let fixture: ComponentFixture<InstrucoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrucoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrucoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
