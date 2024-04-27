import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { News } from "src/news/entities/news.entity";

@Entity('images')
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => News, news => news.images)
    news: News;
}