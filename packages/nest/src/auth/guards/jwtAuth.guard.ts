import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
/**
 * Guard = 不正なリクエストをブロックする
 * このガードが適用されたリクエストハンドラは、JWT認証に通過していない場合には実行されなくなる
 */
export class JwtAuthGuard extends AuthGuard('jwt') {}
