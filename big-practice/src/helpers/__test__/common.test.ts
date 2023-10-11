import { convertBase64, formatPrice } from '@helpers';

describe('Testing convertBase64', () => {
  it('Should resolve with a base64 url when given a valid file', async () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    const result = await convertBase64(file);

    expect(typeof result).toBe('string');
  });

  it('Should reject with an error when given an invalid file', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });

    try {
      await convertBase64(file);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as { message: string }).message).toBe('Unsupported result type');
    }
  });

  //  Testing formatPrice function
  it('should format a positive number to two decimal places', () => {
    const price = 10.12345;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('10.12');
  });

  it('should format a negative number to two decimal places', () => {
    const price = -5.6789;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('-5.68');
  });
});
