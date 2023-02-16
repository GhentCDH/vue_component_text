import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Paragraph from "../Paragraph.vue";

describe("Paragraph", () => {
  const createWrapper = () => {
    return mount(Paragraph, {
      props: {
        lines: [
          { number: 1, content: "Line 1" },
          { number: 2, content: "Line 2" },
        ],
      },
    });
  };
  it("should display line wrappers properly", () => {
    const wrapper = createWrapper();
    const lineWrappers = wrapper.findAll(".paragraph .line-wrapper");
    expect(lineWrappers.length).toBe(2);
  });

  it("should display lines properly", () => {
    const wrapper = createWrapper();
    const lineContents = wrapper.findAll(
      ".paragraph .line-wrapper .line-content"
    );
    expect(lineContents.length).toBe(2);
    expect(lineContents[0].text()).toBe("Line 1");
    expect(lineContents[1].text()).toBe("Line 2");
  });

  it("should display line numbers properly", () => {
    const wrapper = createWrapper();
    const lineNumbers = wrapper.findAll(
      ".paragraph .line-wrapper .line-number"
    );
    expect(lineNumbers.length).toBe(2);
    expect(lineNumbers[0].text()).toBe("1");
    expect(lineNumbers[1].text()).toBe("2");
  });
});
