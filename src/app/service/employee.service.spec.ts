import { TestBed } from '@angular/core/testing';
import { HttpClient,HttpHandler } from '@angular/common/http';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [HttpClient,HttpHandler]}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
