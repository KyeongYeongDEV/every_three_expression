import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './adapter/in/auth.controller';
import { jwtConfig } from 'src/common/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { JwtAdapter } from './adapter/out/jwt.adapter';
import { RedisAdapter } from './adapter/out/redis.adpter';


@Module({
  imports : [JwtModule.register(jwtConfig)],
  providers: [
    AuthService,
    RedisAdapter,
    {
      provide: 'RedisPort',
      useExisting: RedisAdapter,
    },
    JwtAdapter,
    {
      provide: 'JwtPort',
      useExisting: JwtAdapter,
    },
  ],
  controllers: [AuthController],
  exports : ['RedisPort', 'JwtPort']
})
export class AuthModule {}
