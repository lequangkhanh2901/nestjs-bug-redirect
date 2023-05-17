import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('/hi')
  // @Redirect('https://nestjs.com/', 301)
  hi2() {
    return 'hi';
  }
}
