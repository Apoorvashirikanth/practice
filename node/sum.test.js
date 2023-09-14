const {sum} = require('./sum');
test('my first test', () =>{
    expect(sum(2,3)).toBe(5);
});