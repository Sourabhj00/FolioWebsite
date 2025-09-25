import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ScrollSpyService {
  // holds the id ("about" | "skills" | ...) of the section that's most in view
  currentSection = signal<string>("about");

  setCurrent(id: string) {
    this.currentSection.set(id);
  }
}
