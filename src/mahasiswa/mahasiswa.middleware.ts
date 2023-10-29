import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class MahasiswaMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (
      req.headers.authorization &&
      req.headers.authorization === 'Bearer edo24123'
    ) {
      next();
    } else {
      throw new BadRequestException('Anda tidak memiliki akses');
    }
  }
}
