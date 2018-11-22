import { Injectable } from '@angular/core';
import { JavaDocumentation } from '../model/java-documentation';

import { JAVADOCS } from '../mock-javadocs';

@Injectable({
  providedIn: 'root'
})
export class JavadocssearchService {

  constructor() { }

  getJavaDocs(): JavaDocumentation[] {
    return JAVADOCS;
  }
}
