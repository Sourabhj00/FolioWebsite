import { Injectable, signal } from "@angular/core";

const KEY = "lastSection";

@Injectable({ providedIn: "root" })
export class ScrollSpyService {
  currentSection = signal<string>("about");

  setCurrent(id: string) {
    this.currentSection.set(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  }

  getLast(): string | null {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }
}
