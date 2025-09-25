import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ScrollSpyService } from "../services/scroll-spy.service";

@Directive({
  selector: "[observeSection]",
  standalone: true
})
export class ObserveSectionDirective implements OnInit, OnDestroy {
  @Input("observeSection") sectionId!: string;
  private io?: IntersectionObserver;

  constructor(private el: ElementRef, private spy: ScrollSpyService) {}

  ngOnInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.spy.setCurrent(this.sectionId);
          }
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
