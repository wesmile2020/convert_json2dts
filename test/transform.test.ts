import { test, expect } from 'vitest';

import { JSON2Dts } from '@/transform';

test('test JSON2Dts array', () => {
  const json = [1, 'a', true];
  const convert = new JSON2Dts();
  const interfaces = `type RootType = [number, string, boolean];\n\n`;
  expect(convert.transformByJSON(json)).toBe(interfaces);
  const jsonCode = JSON.stringify(json);
  expect(convert.transformByJSONString(jsonCode)).toBe(interfaces);
});

test('test JSON2Dts object', () => {
  const json = { a: 1, b: 'a', c: true, d: null };
  const convert = new JSON2Dts();
  const interfaces =
`interface RootType {
    a: number;
    b: string;
    c: boolean;
    d: null;
}\n\n`;
  expect(convert.transformByJSON(json)).toBe(interfaces);
  const jsonCode = JSON.stringify(json);
  expect(convert.transformByJSONString(jsonCode)).toBe(interfaces);
});
