import { test, expect } from 'vitest';

import {
  InterfaceNode,
  ArrayNode,
  PropertyNode,
} from '@/node';

test('test InterfaceNode', () => {
  const node = new InterfaceNode('interface', 'UserInfo');
  const child = new PropertyNode('age', 'string');
  node.addChild(child);
  expect(node.toString()).toBe('interface UserInfo {\n    age: string;\n}\n\n');
});

test('test ArrayNode', () => {
  const node = new ArrayNode('array', 'List');
  const child = new PropertyNode('age', 'string');
  node.addChild(child);
  expect(node.toString()).toBe('type List = [string];\n\n');
});
