import { Component } from '@angular/core'
import { RouterState } from '@angular/router'
import { routes } from '../app-routing.module'

@Component({
  selector: 'app-top-index',
  templateUrl: './top-index.component.html',
  styleUrls: ['./top-index.component.scss']
})
export class TopIndexComponent {
  rs = routes
}
