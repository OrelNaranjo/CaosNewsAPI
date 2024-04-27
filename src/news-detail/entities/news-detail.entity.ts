import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { News } from 'src/news/entities/news.entity';


@Entity('news_details')
export class NewsDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comments: string;

  @Column({ default: false })
  isApproved: boolean;

  @CreateDateColumn()
  approvedAt: Date;

  @ManyToOne(() => User, user => user.newsDetails)
  approvedBy: User;

  @ManyToOne(() => News, news => news.details)
  news: News;
}