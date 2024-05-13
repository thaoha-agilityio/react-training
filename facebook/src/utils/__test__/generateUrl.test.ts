import { generateUrl } from '../generateUrl';

describe('generateUrl', () => {
  it('correctly generates a URL string with query values', () => {
    const queryValues = [1, 2, 3];
    const paramName = 'author';

    const url = generateUrl(queryValues, paramName);
    expect(url).toBe('author=1&author=2&author=3');
  });
});
