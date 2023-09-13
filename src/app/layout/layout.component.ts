import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  content:any



  ngAfterViewInit() {

  }

  downloadPdf(){
    console.log('called')
  }


  handleEvent(event:any){
    console.log('clicked' , event)

  }


}
