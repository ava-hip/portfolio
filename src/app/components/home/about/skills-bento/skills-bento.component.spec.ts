import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBentoComponent } from './skills-bento.component';

describe('SkillsBentoComponent', () => {
  let component: SkillsBentoComponent;
  let fixture: ComponentFixture<SkillsBentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsBentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsBentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
