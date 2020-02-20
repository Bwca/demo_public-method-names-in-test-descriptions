import { TestBed } from '@angular/core/testing';
import { mock } from 'ts-mockito';

import { SomeService } from './some.service';

type SomeServiceDescriber = { [P in keyof SomeService]: P };
const _: SomeServiceDescriber = {} as SomeServiceDescriber;
Reflect.ownKeys(mock(SomeService)).forEach((i) => {
  _[i] = i;
});

describe(`${SomeService.name}`, () => {
  let service: SomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeService);
  });

  it(`${_.methodOne} should to do stuff`, () => {
    expect(service).toBeTruthy();
  });

  it(`${_.methodTwo} should to other stuff`, () => {
    expect(service).toBeTruthy();
  });
});
