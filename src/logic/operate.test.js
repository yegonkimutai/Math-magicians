import operate from './operate';

describe('operate function', () => {
  it('return correct result for addition', () => {
    expect(operate('3', '3', '+')).toBe('6');
  });

  it('return correct result for subtraction', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  it('return correct result for multiplication', () => {
    expect(operate('3', '3', 'x')).toBe('9');
  });

  it('return correct result for division', () => {
    expect(operate('10', '2', '÷')).toBe('5');
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('return correct result for modulo', () => {
    expect(operate('8', '3', '%')).toBe('2');
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('2', '3', '&')).toThrow("Unknown operation '&'");
  });
});
