import dayjs, { type ConfigType, type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export function convertToLocal(
  date: ConfigType,
  format?: string
): Dayjs & {
  server(): Dayjs;
} {
  let instance = format
    ? dayjs.tz(date, format, "Asia/Shanghai")
    : dayjs.tz(date, "Asia/Shanghai");
  instance = instance.local();

  return Object.assign(instance, {
    server() {
      return instance.tz("Asia/Shanghai");
    },
  });
}

export function convertToServer(date: ConfigType, format?: string): Dayjs {
  let instance = dayjs(date, format);
  instance = instance.tz("Asia/Shanghai");
  return instance;
}
