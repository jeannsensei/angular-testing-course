import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('Calculator service', () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']); // Fake implementation
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    // const logger = new LoggerService();
    // spyOn(logger, "log"); -> no need if there's a fake implementation
    // const logger = jasmine.createSpyObj("LoggerService", ["log"]); // Fake implementation
    // logger.log.and.returnValue(); -> if need of return a value
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, 'Unexpected substraction result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
