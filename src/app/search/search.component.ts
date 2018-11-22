import { Component, OnInit } from '@angular/core';
import { JavadocssearchService } from '../services/javadocssearch.service';
import { JavaDocumentation } from '../model/java-documentation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  javaDocs: JavaDocumentation[];

  constructor(private javadocssearchService: JavadocssearchService) { }

  ngOnInit() {
    this.getJavaDocs();
  }

  getJavaDocs(): void {
    this.javaDocs = this.javadocssearchService.getJavaDocs();
  }

}
