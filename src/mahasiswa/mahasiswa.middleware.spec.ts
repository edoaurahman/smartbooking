import { MahasiswaMiddleware } from './mahasiswa.middleware';

describe('MahasiswaMiddleware', () => {
  it('should be defined', () => {
    expect(new MahasiswaMiddleware()).toBeDefined();
  });
});
