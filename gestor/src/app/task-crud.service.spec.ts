import { TestBed } from '@angular/core/testing';

import { TaskCRUDService } from './task-crud.service';

describe('TaskCRUDService', () => {
  let service: TaskCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
