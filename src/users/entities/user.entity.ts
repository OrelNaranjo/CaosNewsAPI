import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from "typeorm";
import { News } from "src/news/entities/news.entity";
import { Group } from "src/users-groups/entities/users-group.entity";
import { NewsDetail } from "src/news-detail/entities/news-detail.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => News, news => news.created_by)
    news: News[];

    @ManyToMany(() => Group, group => group.users)
    groups: Group[];

    @OneToMany(() => NewsDetail, newsDetail => newsDetail.approvedBy)
    newsDetails: NewsDetail[];
}