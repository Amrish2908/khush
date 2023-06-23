import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  
  groups = [
        {
          name: 'Group 1',
          items: ['Item 1', 'Item 2', 'Item 3']
        },
        {
          name: 'Group 2',
          items: ['Item 4', 'Item 5', 'Item 6']
        },
      ];

  onItemDrop(event: CdkDragDrop<string[]>, targetGroup: any) {
    console.log(event,targetGroup)
    if (event.previousContainer === event.container) {
      // Item is moved within the same group
      moveItemInArray(targetGroup.items, event.previousIndex, event.currentIndex);
    } else {
      // Item is moved from one group to another
      transferArrayItem(
        event.previousContainer.data,
        targetGroup.items,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}