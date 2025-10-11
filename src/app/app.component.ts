import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoComponent } from "./zodiaco/zodiaco.component";
import { AporbComponent } from "./aporb/aporb.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, AporbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
