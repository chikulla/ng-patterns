import { Component, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-remember-form',
  templateUrl: './remember-form.component.html',
})
export class RememberFormComponent implements OnDestroy {
  fg: FormGroup = new FormGroup({
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    name: new FormGroup({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
    }),
  })
  subscription = new Subscription()

  constructor() {
    this.subscription.add(this.fg.valueChanges.subscribe(v => this.store(v)))
    this.load()
  }

  submit(): void {
    alert('Submit: ' + JSON.stringify(this.fg.value, null, 2))
    this.fg.reset()
  }

  store(valueObject: object): void {
    try {
      const jsonString = JSON.stringify(valueObject)
      localStorage.setItem('RememberFormComponent', jsonString)
    } catch (_) {
    }
  }

  load(): void {
    try {
      const jsonString = localStorage.getItem('RememberFormComponent')
      if (!jsonString) {
        return
      }
      const parsed = JSON.parse(jsonString)
      this.fg.setValue(parsed)
    } catch (_) {
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
