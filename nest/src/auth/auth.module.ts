import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './guards/jwtAuth.guard';

@Module({
  imports: [
    //このモジュール内のみ使用
    TypeOrmModule.forFeature([UserRepository]),
    //デフォルトの認証方法をJWTにしている
    PassportModule.register({ defaultStrategy: 'jwt' }),
    //JWTの設定
    JwtModule.register({
      //JWTの秘密鍵
      secret: 'secretKey123',
      signOptions: {
        //JWTの有効期限
        expiresIn: 3600,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  controllers: [AuthController],
  exports: [JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
