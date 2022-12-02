import {Directive, HostBinding, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[imageSrc]'
})
export class ImageSrcDirective implements OnInit {

  noPhotoSrc: string = '/assets/images/hogwart.jpg';

  @Input('imageSrc') imageSrc: string = '';
  @HostBinding('src') src: string = this.noPhotoSrc;

  constructor() {
  }

  ngOnInit(): void {
    if (this.imageSrc) {
      // TODO: ezt ki kell majd szedni
      this.src = this.imageSrc.replace("herokuapp", "onrender");
    }
  }

  @HostListener('error') onError() {
    this.src = this.noPhotoSrc;
  }
}
