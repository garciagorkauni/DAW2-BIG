import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOsagaiaComponent } from './test-osagaia.component';

describe('TestOsagaiaComponent', () => {
  let component: TestOsagaiaComponent;
  let fixture: ComponentFixture<TestOsagaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestOsagaiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOsagaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
