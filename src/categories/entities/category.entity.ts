import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { News } from "src/news/entities/news.entity";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => News, news => news.category)
    news: News[];
}