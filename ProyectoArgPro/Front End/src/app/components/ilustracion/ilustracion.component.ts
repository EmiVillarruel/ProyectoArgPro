import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-ilustracion',
  templateUrl: './ilustracion.component.html',
  styleUrls: ['./ilustracion.component.css']
})
export class IlustracionComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona= data})
  }

}
