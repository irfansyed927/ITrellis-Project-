import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ViewComponent } from './view.component';
import { Car } from 'src/app/shared/models/Car';
import { CarsService } from 'src/app/shared/services/cars.service';
import { spyOn } from 'jasmine';
import { HttpModule } from '@angular/http';
import { expect } from 'jasmine';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      providers: [
        CarsService
      ],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it("should call getJSON and return list of cars", async(() => {
    const response: Car[] = [{
      "_id": "59d2698c2eaefb1268b69ee5",
      "make": "Chevy",
      "year": 2016,
      "color": "Gray",
      "price": 16106,
      "hasSunroof": false,
      "isFourWheelDrive": true,
      "hasLowMiles": true,
      "hasPowerWindows": false,
      "hasNavigation": true,
      "hasHeatedSeats": false
  },
  {
      "_id": "59d2698c05889e0b23959106",
      "make": "Toyota",
      "year": 2012,
      "color": "Silver",
      "price": 18696,
      "hasSunroof": true,
      "isFourWheelDrive": true,
      "hasLowMiles": false,
      "hasPowerWindows": true,
      "hasNavigation": false,
      "hasHeatedSeats": true
  },
  {
      "_id": "59d2698c6f1dc2cbec89c413",
      "make": "Mercedes",
      "year": 2016,
      "color": "Black",
      "price": 18390,
      "hasSunroof": true,
      "isFourWheelDrive": false,
      "hasLowMiles": false,
      "hasPowerWindows": true,
      "hasNavigation": true,
      "hasHeatedSeats": false
  },
  {
      "_id": "59d2698c340f2728382c0a73",
      "make": "Toyota",
      "year": 2015,
      "color": "White",
      "price": 15895,
      "hasSunroof": true,
      "isFourWheelDrive": false,
      "hasLowMiles": true,
      "hasPowerWindows": true,
      "hasNavigation": false,
      "hasHeatedSeats": true
  }];
  
    spyOn(carsService:CarsService, 'getJSON').and.returnValue(of(response))  
    component.ngOnInit();  
    fixture.detectChanges();  
    expect(component.cars).toEqual(response);
  }));
});
