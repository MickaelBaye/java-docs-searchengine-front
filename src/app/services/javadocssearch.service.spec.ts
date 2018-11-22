import { TestBed } from '@angular/core/testing';

import { JavadocssearchService } from './javadocssearch.service';

describe('JavadocssearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavadocssearchService = TestBed.get(JavadocssearchService);
    expect(service).toBeTruthy();
  });
});
