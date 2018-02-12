import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

import {FormsModule} from '@angular/forms';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let element: any;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    element = fixture.nativeElement;
    expect(element.querySelectorAll('li').length).toBe(2);
  })


  it('should create add member', () => {
    expect(component).toBeTruthy();
    element = fixture.nativeElement;
    component.name = 'Karthi';
    component.addMember();

    fixture.detectChanges();

    expect(component.name).toBe('');
    expect(component.members.length).toBe(3);

    expect(element.querySelectorAll('li').length).toBe(3);
  
    expect(element.querySelectorAll('li')[2].textContent)
          .toContain("Karthi");
  })


  it('should empty list', () => {
    expect(component).toBeTruthy();
    element = fixture.nativeElement;
    component.empty();
    fixture.detectChanges();

    expect(element.querySelectorAll('li').length).toBe(0);
   })



  it('should empty list', () => {
    expect(component).toBeTruthy();
    element = fixture.nativeElement;
    component.show = false;
    fixture.detectChanges();

    expect(element.querySelectorAll('li').length).toBe(0);

    expect(element.querySelectorAll('ul').length).toBe(0);
   })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  //   element = fixture.nativeElement;
  //   fixture.detectChanges(); //trigger change detection
  //   expect(element.querySelectorAll('li').length).toBe(2);
    
  //   component.addMember();
  //   fixture.detectChanges(); //trigger change detection
  //   expect(element.querySelectorAll('li').length).toBe(3);


  //   component.empty();
  //   fixture.detectChanges(); //trigger change detection
  //   expect(element.querySelectorAll('li').length).toBe(0);


  // });
});
