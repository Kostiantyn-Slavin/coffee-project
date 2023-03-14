import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CoffeeListContainerComponent} from './coffee-list-container.component';
import {AppState} from '../../store';
import {initialState as CoffeeInitialState} from '../store/coffee.reducer';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

const initialState: AppState = {
  coffeeState: {...CoffeeInitialState},
};

export const coffeeListMock: CoffeeItem[] = [
  {
    id: 1,
    blend_name: 'Morning Blend',
    origin: 'Colombia',
    variety: 'Arabica',
    notes: 'Bright and Fruity',
    intensifier: 'High',
  },
  {
    id: 2,
    blend_name: 'Afternoon Blend',
    origin: 'Ethiopia',
    variety: 'Sidamo',
    notes: 'Bold and Floral',
    intensifier: 'Medium',
  },
  {
    id: 3,
    blend_name: 'Evening Blend',
    origin: 'Brazil',
    variety: 'Santos',
    notes: 'Smooth and Nutty',
    intensifier: 'Low',
  },
  {
    id: 4,
    blend_name: 'Decaf Blend',
    origin: 'Guatemala',
    variety: 'Bourbon',
    notes: 'Mild and Earthy',
    intensifier: 'None',
  },
  {
    id: 5,
    blend_name: 'Espresso Blend',
    origin: 'Italy',
    variety: 'Robusta',
    notes: 'Strong and Chocolatey',
    intensifier: 'Very High',
  },
];

describe('CoffeeListContainerComponent', () => {
  let component: CoffeeListContainerComponent;
  let fixture: ComponentFixture<CoffeeListContainerComponent>;
  let store: MockStore<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeListContainerComponent],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  const getElementById = (selector: string): DebugElement =>
    fixture.debugElement.query(By.css(selector));

  const getElementListById = (selector: string): DebugElement[] =>
    fixture.debugElement.queryAll(By.css(selector));

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.setState({...initialState});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loader and do not show container and footer blocks while data loading', () => {
    component.ngOnInit();
    store.setState({
      ...initialState,
      coffeeState: {
        ...initialState.coffeeState,
        loader: true,
      },
    });
    fixture.detectChanges();
    const loaderElement = getElementById('[data-id="cf-loader"]');
    const coffeeDataElement = getElementById('[data-id="cf-content"]');
    const footerElement = getElementById('[data-id="cf-footer"]');
    expect(loaderElement).toBeDefined();
    expect(coffeeDataElement).toBeNull();
    expect(footerElement).toBeNull();
  });

  it('should display data, footer blocks and hide loader when coffee data already loaded', () => {
    component.ngOnInit();
    store.setState({
      ...initialState,
      coffeeState: {
        ...initialState.coffeeState,
        coffeeList: coffeeListMock,
        loader: false,
      },
    });
    fixture.detectChanges();
    const loaderElement = getElementById('[data-id="cf-loader"]');
    const dataList = getElementListById('app-coffee-item');
    const coffeeData = getElementById('[data-id="cf-content"]');
    const footerElement = getElementById('[data-id="cf-footer"]');
    expect(dataList?.length).toEqual(coffeeListMock.length);
    expect(loaderElement).toBeNull();
    expect(coffeeData).toBeDefined();
    expect(footerElement).toBeDefined();
  });
});
