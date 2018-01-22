import {DemoComponent} from './demo.component';
import {using} from "../../testUtils/using";
import {ComponentService} from "../component.service";
import createSpy = jasmine.createSpy;
import {of} from "rxjs/observable/of";

describe('DemoComponent', () => {
  let component: DemoComponent;
  let componentService;

  beforeEach(() => {
    componentService = {} as ComponentService;
    component = new DemoComponent(componentService);
  });
  using((data) =>
    it('has values on init', () => {
      // given
      const returnValue: String = data.returnValue;
      const returnUpperCase: String = data.returnUpperCase;
      componentService.getFromServer = createSpy("").and.returnValues(returnValue);
      componentService.toUpperCase = createSpy("").and.returnValues(returnUpperCase);
      // when
      component.ngOnInit();
      // then
      expect(componentService.getFromServer.calls.allArgs()).toEqual(data.getFromServerCalls);
      expect(componentService.toUpperCase.calls.allArgs()).toEqual(data.uppercaseCalls);

      expect(component.raw).toEqual(data.expectedRaw);
      expect(component.text).toEqual(data.expectedText);
    }), {
    // where
    returnValue: [of("Hello world"), of("Hello")],
    returnUpperCase: ["HELLO WORLD", []],
    uppercaseCalls: [
      [["Hello world"], ["Demo App"]],
      [["Demo App"]]
    ],
    getFromServerCalls: [
      [[]],
      [[]]
    ],
    expectedText: ["HELLO WORLD", "Hello"],
    expectedRaw: ["Hello world", "Hello"]
  });
});
