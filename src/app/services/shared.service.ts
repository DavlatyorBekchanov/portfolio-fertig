import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  impressum = signal<boolean>(false);
  aboutMe = signal<boolean>(false);
  skills = signal<boolean>(false);
  projects = signal<boolean>(false);
}
