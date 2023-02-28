import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { Paragraph } from "..";

describe("Header display", () => {
  const createDefaultWrapper = () => {
    return mount(Paragraph, {
      props: {
        id: "1",
        header: "Header",
        lines: [],
      },
    });
  };

  it("should display header properly (default = h3)", () => {
    const wrapper = createDefaultWrapper();
    const headers = wrapper.findAll(
      "div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Header");
  });

  const createH4Wrapper = () => {
    return mount(Paragraph, {
      props: {
        id: "1",
        headerComponentType: "h4",
        header: "Header",
        lines: [],
      },
    });
  };

  it("should display header properly (h4)", () => {
    const wrapper = createH4Wrapper();
    const headers = wrapper.findAll(
      "div.paragraph-wrapper h4.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Header");
  });

  const createNumberWrapper = () => {
    return mount(Paragraph, {
      props: {
        id: "1",
        number: 1,
        lines: [],
      },
    });
  };

  it("should display header properly (number)", () => {
    const wrapper = createNumberWrapper();
    const headers = wrapper.findAll(
      "div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Paragraph 1");
  });
});

describe("Lines", () => {
  const createDefaultWrapper = () => {
    return mount(Paragraph, {
      props: {
        id: "1",
        lines: [
          { id: "1", content: "Line 1" },
          { id: "2", content: "Line 2" },
        ],
      },
    });
  };

  it("should display line wrappers properly (default = new-line)", () => {
    const wrapper = createDefaultWrapper();
    const lineWrappers = wrapper.findAll(
      "div.paragraph-wrapper div.new-line-paragraph div.line-wrapper"
    );
    expect(lineWrappers.length).toBe(2);
  });

  it("should display line contents properly (default = new-line)", () => {
    const wrapper = createDefaultWrapper();
    const lineContents = wrapper.findAll(".line-wrapper div.line-content");
    expect(lineContents.length).toBe(2);
    expect(lineContents[0].text()).toBe("Line 1");
    expect(lineContents[1].text()).toBe("Line 2");
  });

  it("should display line numbers properly (default = new-line)", () => {
    const wrapper = createDefaultWrapper();
    const lineNumbers = wrapper.findAll(".line-wrapper div.line-number");
    expect(lineNumbers.length).toBe(2);
    expect(lineNumbers[0].text()).toBe("1");
    expect(lineNumbers[1].text()).toBe("2");
  });

  const createInlineWrapper = () => {
    return mount(Paragraph, {
      props: {
        id: "1",
        paragraphStyle: "in-line",
        lines: [
          { id: "1", content: "Line 1" },
          { id: "2", content: "Line 2" },
        ],
      },
    });
  };

  it("should display line wrappers properly (in-line)", () => {
    const wrapper = createInlineWrapper();
    const lineWrappers = wrapper.findAll(
      "div.paragraph-wrapper div.in-line-paragraph span.line-wrapper"
    );
    expect(lineWrappers.length).toBe(2);
  });

  it("should display lines properly (in-line)", () => {
    const wrapper = createInlineWrapper();
    const lineContents = wrapper.findAll(
      ".in-line-paragraph .line-wrapper span.line-content"
    );
    expect(lineContents.length).toBe(2);
    expect(lineContents[0].text()).toBe("Line 1");
    expect(lineContents[1].text()).toBe("Line 2");
  });

  it("should display line numbers properly (in-line)", () => {
    const wrapper = createInlineWrapper();
    const lineNumbers = wrapper.findAll(
      ".in-line-paragraph .line-wrapper span.line-number"
    );
    expect(lineNumbers.length).toBe(2);
    expect(lineNumbers[0].text()).toBe("1");
    expect(lineNumbers[1].text()).toBe("2");
  });
});
