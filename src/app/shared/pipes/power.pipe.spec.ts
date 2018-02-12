import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(2, 3)).toBe(8);

    expect(pipe.transform(2)).toBe(2);
  });
});
