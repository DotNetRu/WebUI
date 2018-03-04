import { XmlEncodePipe } from './xml-encode.pipe';

describe('XmlEncodePipe', () => {
  it('create an instance', () => {
    const pipe = new XmlEncodePipe(null);
    expect(pipe).toBeTruthy();
  });
});
