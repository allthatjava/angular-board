import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class SharedService{

    navTabActiveId$ = new BehaviorSubject(null);
    navTabActiveIdObs = this.navTabActiveId$.asObservable();
}