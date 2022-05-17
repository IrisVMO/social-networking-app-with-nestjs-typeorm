import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

@Module({
  controllers: [AlbumsController],
  imports: [AuthModule],
  providers: [AlbumsService],
})
export class AlbumsModule {}
