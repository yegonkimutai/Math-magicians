import calculate from './calculate';

describe('calculate', () => {
  it('returns empty object when buttonName is "AC"', () => {
    expect(calculate({ total: '123', next: '456', operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('updates object with next when buttonName is a number', () => {
    expect(calculate({ total: '123', next: '4', operation: '+' }, '5')).toEqual({
      total: '123',
      next: '45',
      operation: '+',
    });
  });

  it('updates object with next and total when buttonName is "."', () => {
    expect(calculate({ total: '123', next: '456', operation: null }, '.')).toEqual({
      total: '123',
      next: '456.',
      operation: null,
    });
  });

  it('updates object with total and next when buttonName is "="', () => {
    expect(calculate({ total: '123', next: '456', operation: '+' }, '=')).toEqual({
      total: '579',
      next: null,
      operation: null,
    });
  });

  it('updates object with negated next when buttonName is "+/-"', () => {
    expect(calculate({ total: '123', next: '456', operation: null }, '+/-')).toEqual({
      total: '123',
      next: '-456',
      operation: null,
    });
  });

  it('updates object with operation when buttonName is an operation', () => {
    expect(calculate({ total: '123', next: '456', operation: null }, '+')).toEqual({
      total: '456',
      next: null,
      operation: '+',
    });
  });
});
