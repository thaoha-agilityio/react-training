import { convertBase64 } from '@helpers';

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
});
