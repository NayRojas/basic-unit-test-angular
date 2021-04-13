import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let debug: DebugElement;
  let ele: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FormComponent);

        component = fixture.componentInstance;

        debug = fixture.debugElement.query(By.css('form'));
        ele = debug.nativeElement;
      });
  }));

  it('should have as text Form Page :D', async(() => {
    expect(component.text).toEqual('Form page :D');
  }));

  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    ele = fixture.debugElement.query(By.css('button')).nativeElement;
    ele.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('should be invalid', async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it('should be valid', async(() => {
    component.contactForm.controls['email'].setValue('dsa@gmai.com');
    component.contactForm.controls['name'].setValue('Nayn');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a h title with an specific string inside', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('form works!');
  });
});
