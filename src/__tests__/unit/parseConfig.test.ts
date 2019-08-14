import * as fs from 'fs';
import * as path from 'path';
import {parseConfig} from '../../util/parseConfig';
import {parse} from '@babel/core';

let defaultConig: string;

// Mimick tailwind.config.js upload via UI
beforeAll(() => {
  defaultConig = fs.readFileSync(
    path.join(
      __dirname,
      '../../../node_modules/tailwindcss/stubs/defaultConfig.stub.js',
    ),
    'utf-8',
  );
});

describe('Reading a valid configuration file', () => {
  it('should return an object with theme field', () => {
    const test = parseConfig(defaultConig);
    expect(parseConfig(defaultConig)).toHaveProperty('theme');
  });
});

describe('Reading an invalid configuration file', () => {
  it('should return an empty object', () => {
    expect(parseConfig(null)).toStrictEqual({});
  });
});
