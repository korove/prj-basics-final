import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
<<<<<<< HEAD

=======
>>>>>>> f45eed233a664a353301751160ea56603124dc2e
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
