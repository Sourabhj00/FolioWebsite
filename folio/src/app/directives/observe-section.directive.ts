import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ScrollSpyService } from "../services/scroll-spy.service";

@Directive({
  selector: "[observeSection]",
  standalone: true
})
export class ObserveSectionDirective implements OnInit, OnDestroy {
  @Input("observeSection") sectionId!: string;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private spy: ScrollSpyService) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.spy.setCurrent(this.sectionId);
          }
        }
      },
      {
        // start switching a bit before the section top hits the navbar
        root: null,
        rootMargin: "-30% 0px -60% 0px", // top bias
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
