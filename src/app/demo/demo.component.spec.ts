import {DemoComponent} from './demo.component';
import {using} from "../../testUtils/using";
import {ComponentService} from "../component.service";
import createSpy = jasmine.createSpy;

describe('DemoComponent', () => {
  let component: DemoComponent;
  let componentService;

  beforeEach(() => {
    componentService = {} as ComponentService;
    component = new DemoComponent(componentService);
  });
  using({
    // where
    returnValue: [1, 2],
    returnUpperCase: ["1", "2"],
    returnUpperCase2: ["a", "a"],
    uppercaseCalls:[
      [],
      [["2"], ["2"]]
    ],
    expectedUpperCase: [undefined, "2"],
    expectedUpperCase2: [undefined, "a"]
  }, (data) => {
    it('has values on init', () => {
      // given
      const returnValue: number = data.returnValue;
      const returnUpperCase: String = data.returnUpperCase;
      const returnUpperCase2: String = data.returnUpperCase2;
      componentService.getValue = createSpy("").and.returnValues(returnValue);
      componentService.toUpperCase = createSpy("").and.returnValues(returnUpperCase, returnUpperCase2);

      // when
      component.ngOnInit();

      // then
      expect(componentService.getValue.calls.allArgs()).toEqual([[]]);
      expect(componentService.toUpperCase.calls.allArgs()).toEqual(data.uppercaseCalls);

      expect(component.value).toEqual(returnValue);
      expect(component.text).toEqual(data.expectedUpperCase);
      expect(component.text2).toEqual(data.expectedUpperCase2);
    });
  });
});
