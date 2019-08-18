import {convertColor} from '../../util/convertColor';

const colorObject = {
  theme: {
    colors: {
      transparent: 'transparent',
      hex: '#E53E3E',
      rgb: 'rgb(56,161,105)',
      rgba: 'rgba(49,151,149, 0.5)',
      hsl: 'hsl(170, 45%, 45%)',
      hsla: 'hsla(170, 45%, 45%, 0.5)',
    },
  },
};

const {colors} = colorObject.theme;

describe('Passing a valid config color', () => {
  let currentColor;

  it('should return object from transparent string', () => {
    currentColor = convertColor(colors['transparent']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });

  it('should return object from hex', () => {
    currentColor = convertColor(colors['hex']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });

  it('should return object from rgb', () => {
    currentColor = convertColor(colors['rgb']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });

  it('should return object from rgba', () => {
    currentColor = convertColor(colors['rgba']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });

  it('should return object from hsl', () => {
    currentColor = convertColor(colors['hsl']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });

  it('should return object from hsla', () => {
    currentColor = convertColor(colors['hsla']);
    // Check if valid object
    expect(currentColor).toHaveProperty('r');
    expect(currentColor).toHaveProperty('g');
    expect(currentColor).toHaveProperty('b');
    expect(currentColor).toHaveProperty('a');
    // Check if valid values
    expect(currentColor['r']).toBeGreaterThanOrEqual(0);
    expect(currentColor['r']).toBeLessThanOrEqual(1);
    expect(currentColor['g']).toBeGreaterThanOrEqual(0);
    expect(currentColor['g']).toBeLessThanOrEqual(1);
    expect(currentColor['b']).toBeGreaterThanOrEqual(0);
    expect(currentColor['b']).toBeLessThanOrEqual(1);
    expect(currentColor['a']).toBeGreaterThanOrEqual(0);
    expect(currentColor['a']).toBeLessThanOrEqual(1);
  });
});
