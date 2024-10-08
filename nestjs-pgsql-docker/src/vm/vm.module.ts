import { Module } from '@nestjs/common';
import { VmService } from './vm.service';
import { VmController } from './vm.controller';

@Module({
  controllers: [VmController],
  providers: [VmService],
})
export class VmModule {}
