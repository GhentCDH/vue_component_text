import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { Paragraph } from "..";

describe("Default paragraph (newline)", () => {
  const createWrapper = () => {
    return mount(Paragraph, {
      props: {
        lines: [
          { id: "1", content: "Line 1" },
          { id: "2", content: "Line 2" },
        ],
      },
    });
  };
  it("should display line wrappers properly", () => {
    const wrapper = createWrapper();
    const lineWrappers = wrapper.findAll(
      ".new-line-paragraph div.line-wrapper"
    );
    expect(lineWrappers.length).toBe(2);
  });

  it("should display lines properly", () => {
    const wrapper = createWrapper();
    const lineContents = wrapper.findAll(
      ".new-line-paragraph .line-wrapper div.line-content"
    );
    expect(lineContents.length).toBe(2);
    expect(lineContents[0].text()).toBe("Line 1");
    expect(lineContents[1].text()).toBe("Line 2");
  });

  it("should display line numbers properly", () => {
    const wrapper = createWrapper();
    const lineNumbers = wrapper.findAll(
      ".new-line-paragraph .line-wrapper div.line-number"
    );
    expect(lineNumbers.length).toBe(2);
    expect(lineNumbers[0].text()).toBe("1");
    expect(lineNumbers[1].text()).toBe("2");
  });
});

describe("Inline paragraph", () => {
  const createWrapper = () => {
    return mount(Paragraph, {
      props: {
        paragraphStyle: "in-line",
        lines: [
          { id: "1", content: "Line 1" },
          { id: "2", content: "Line 2" },
        ],
      },
    });
  };
  it("should display line wrappers properly", () => {
    const wrapper = createWrapper();
    const lineWrappers = wrapper.findAll(
      ".in-line-paragraph span.line-wrapper"
    );
    expect(lineWrappers.length).toBe(2);
  });

  it("should display lines properly", () => {
    const wrapper = createWrapper();
    const lineContents = wrapper.findAll(
      ".in-line-paragraph .line-wrapper span.line-content"
    );
    expect(lineContents.length).toBe(2);
    expect(lineContents[0].text()).toBe("Line 1");
    expect(lineContents[1].text()).toBe("Line 2");
  });

  it("should display line numbers properly", () => {
    const wrapper = createWrapper();
    const lineNumbers = wrapper.findAll(
      ".in-line-paragraph .line-wrapper span.line-number"
    );
    expect(lineNumbers.length).toBe(2);
    expect(lineNumbers[0].text()).toBe("1");
    expect(lineNumbers[1].text()).toBe("2");
  });
});
