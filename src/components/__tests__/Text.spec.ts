import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { Text } from "..";

describe("Header display", () => {
  const createHeaderWrapper = () => {
    return mount(Text, {
      props: {
        paragraphs: [{ id: "1", header: "Header", lines: [] }],
      },
    });
  };

  it("should display paragraph header properly (number)", () => {
    const wrapper = createHeaderWrapper();
    const headers = wrapper.findAll(
      "div.text div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Header");
  });

  const createNumberWrapper = () => {
    return mount(Text, {
      props: {
        paragraphs: [{ id: "1", number: 1, lines: [] }],
      },
    });
  };

  it("should display paragraph header properly (number)", () => {
    const wrapper = createNumberWrapper();
    const headers = wrapper.findAll(
      "div.text div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Paragraph 1");
  });

  const createIndexWrapper = () => {
    return mount(Text, {
      props: {
        paragraphs: [{ id: "1", lines: [] }],
      },
    });
  };

  it("should display paragraph header properly (index)", () => {
    const wrapper = createIndexWrapper();
    const headers = wrapper.findAll(
      "div.text div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(1);
    expect(headers[0].text()).toBe("Paragraph 1");
  });

  const createNoHeadersWrapper = () => {
    return mount(Text, {
      props: {
        displayHeaders: false,
        paragraphs: [{ id: "1", lines: [] }],
      },
    });
  };

  it("should display no paragraph header properly", () => {
    const wrapper = createNoHeadersWrapper();
    const headers = wrapper.findAll(
      "div.text div.paragraph-wrapper h3.paragraph-header"
    );
    expect(headers.length).toBe(0);
  });
});
