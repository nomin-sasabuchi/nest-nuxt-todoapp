---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/compositions/index.test.ts
---
import {
  <% if(hasProps){ -%> 
  someFunction, 
  <% } -%>
  dispatchMessage 
} from "../index";

describe("composition", () => {
  describe("dispatchMessage", () => {
    test("クリックされたことを通知する", () => {
      const emitMock = jest.fn();
      const message = "hoge";
      const testTarget = dispatchMessage(emitMock);
      testTarget(message)
      expect(emitMock).toHaveBeenCalled();
      expect(emitMock).toHaveBeenCalledWith("clicked", message);
    });
  });
  <% if(hasProps){ -%> 
  describe("someFunction", () => {
    test("入力テキストに感嘆符を付与する", () => {
      const message = "hoge";
      const answer = "hoge !!"
      const testTarget = someFunction(message)
      expect(testTarget()).toBe(answer);
    });
  });
  <% } -%>
});
