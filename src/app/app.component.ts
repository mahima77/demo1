import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  disname:boolean = true;
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([ new FormGroup({
                              name: new FormControl(''),
                              assignedname: new FormControl(''),
                              description: new FormControl(''),
                              summary: new FormControl(''),
                         })]) ,
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl('')
      })
    });
  
  }
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
     name: '',
                              assignedname: '',
                              description: '',
                              summary:''
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }

   dissablefield(a){
     this.disname = a;
     console.log( this.disname)
     
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
 
