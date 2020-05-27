import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from 'src/app/Todo';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  // ?  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.localStorageService.getTo(uuid);

  }


}
