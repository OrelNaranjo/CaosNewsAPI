import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { News } from "src/news/entities/news.entity";

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => News, news => news.country)
    news: News[];
}