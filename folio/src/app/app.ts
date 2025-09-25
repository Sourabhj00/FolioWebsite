import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { ObserveSectionDirective } from "./directives/observe-section.directive";
import { ScrollSpyService } from "./services/scroll-spy.service";
import { PROFILE } from "./content/profile";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.css",
  imports: [CommonModule, ObserveSectionDirective],
  animations: [
    trigger("enter", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(12px)" }),
        animate("320ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ])
  ]
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  public readonly profile = PROFILE;
  public readonly spy = inject(ScrollSpyService);
  public readonly animationsEnabled =
    typeof window !== "undefined"
      ? !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
      : true;
}



