import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { ImagesModule } from './images/images.module';
import { NewsDetailModule } from './news-detail/news-detail.module';
import { CategoriesModule } from './categories/categories.module';
import { CountriesModule } from './countries/countries.module';
import { UsersPermissionsModule } from './users-permissions/users-permissions.module';
import { UsersGroupsModule } from './users-groups/users-groups.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    NewsModule,
    ImagesModule,
    NewsDetailModule,
    CategoriesModule,
    CountriesModule,
    UsersPermissionsModule,
    UsersGroupsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
