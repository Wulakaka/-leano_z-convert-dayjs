import { describe, expect, test } from "vitest";
import { convertToLocal, convertToServer } from "../src/main";
import dayjs from "dayjs";

describe("convertToLocal", () => {
  test("将服务器传回的东八区时间转换为当地时间", () => {
    expect(convertToLocal("2023/4/23 16:28:00").format("HH")).toBe("15");
  });
  test("服务器返回的东八区时间经过转换后仍然为东八区时间", () => {
    expect(convertToLocal("2023/4/23 16:28:00").server().format("HH")).toBe(
      "16"
    );
  });
  test("带有时区信息的时间不受影响", () => {
    expect(convertToLocal(new Date()).format("HH")).toEqual(
      dayjs().format("HH")
    );
  });
});

describe("convertToServer", () => {
  test("将当地时间转换为东八区时间", () => {
    expect(convertToServer(new Date()).format("HH")).toEqual("18");
  });
});
