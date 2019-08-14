import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

    public show() {
        document.getElementById('loading').classList.remove('hidden');
    }

    public hide(){
        document.getElementById('loading').classList.add('hidden');
    }

}
