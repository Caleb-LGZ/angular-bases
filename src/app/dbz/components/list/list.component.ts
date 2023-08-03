import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '1',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter;

  public onDeleteById: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id: string): void {
    //TODO: Emitir el ID del personaje
    // console.log(index)
    // this.onDelete.emit(index);
    this.onDeleteById.emit(id);
  }


}