import { calculateConversion } from "@Utils";
import { describe, expect, it } from "vitest";

describe("Utils - calculateConversion", () => {
  it("should convert between two currencies", () => {
    let res = calculateConversion(
      200,
      { currency: "SEK", rate: 11.230693 },
      { currency: "USD", rate: 1.093936 },
    );

    expect(parseFloat(res.toFixed(2))).toEqual(19.48);

    res = calculateConversion(
      200,
      { currency: "SEK", rate: 11.241673 },
      { currency: "USD", rate: 1.093667 },
    );

    expect(parseFloat(res.toFixed(2))).toEqual(19.46);
  });
});
