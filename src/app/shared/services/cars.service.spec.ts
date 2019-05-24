
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CarsService } from './cars.service';
import { TestBed, async, inject } from '@angular/core/testing';


describe('CarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [      
      CarsService,
      { provide: XHRBackend, useClass: MockBackend },
    ]
  }));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });

  describe('geCarJSON()', () => {
    
        it('should return an Observable<Array<Car>>',
            inject([CarsService, XHRBackend], (carsService:CarsService, mockBackend:XHRBackend) => {
    
            const mockResponse = {
              data: [
                {
                  _id: '59d2698c2eaefb1268b69ee5',
                  make: 'Chevy',
                  year: 2016,
                  color: 'Gray',
                  price: 16106,
                  hasSunroof: false,
                  isFourWheelDrive: true,
                  hasLowMiles: true,
                  hasPowerWindows: false,
                  hasNavigation: true,
                  hasHeatedSeats: false
              },
              {
                  _id: '59d2698c05889e0b23959106',
                  make: 'Toyota',
                  year: 2012,
                  color: 'Silver',
                  price: 18696,
                  hasSunroof: true,
                  isFourWheelDrive: true,
                  hasLowMiles: false,
                  hasPowerWindows: true,
                  hasNavigation: false,
                  hasHeatedSeats: true
              }
              ]
            };
    
            mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
              })));
            });
    
            carsService.getJSON().subscribe((cars) => {
              expect(cars.length).toBe(2);
              expect(cars[0].make).toEqual('Chevy');
              expect(cars[1].color).toEqual('Silver');
              
            });
    
        }));
      });
  // TODO: Create unit tests for service methods
});
