// パスポートの認証方法にjwtを使う際に必要になるライブラリ
import { Strategy, ExtractJwt } from 'passport-jwt';
//認証機能を提供するライブラリ
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'entities/user.entity';

@Injectable()
/**
 * Strategy = JWTの検証処理(JWT)
 * PassportStrategy =nestjsでStrategyをより使いやすくしてくれるもの
 * super = オブジェクトの親の関数を呼び出すために使用
 */
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    //親クラスのコンストラクタにオブジェクトを渡す
    super({
      //リクエストのどの部分にJWTが記述されているか指定
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //トークンの有効期限切れを考慮するか
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }

  /**
   * 認証処理
   */
  async validate(payload: { id: string; username: string }): Promise<User> {
    const { id, username } = payload;
    const user = await this.userRepository.findOne({ id, username });

    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}
