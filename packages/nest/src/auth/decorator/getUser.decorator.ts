import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * createParamDecorator((デコレーターの引数,)=>) = nestjs/commonが提供する関数でこれにより、デコレータを作成できる
 *
 * ExecutionContext = ハンドラーに渡されたリクエストを取得したり、実行中のハンドラーが属するコントローラークラスの型を取得したり
 * 実行中の一連の処理に関する情報を取得するために利用されるクラス
 */
export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
