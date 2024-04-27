import { Category } from "src/categories/entities/category.entity";
import { Country } from "src/countries/entities/country.entity";
import { Image } from "src/images/entities/image.entity";
import { NewsDetail } from "src/news-detail/entities/news-detail.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    date: Date;

    @Column()
    description: string;

    @Column()
    is_active: boolean;

    @Column()
    is_deleted: boolean;

    @Column()
    is_featured: boolean;

    @Column()
    title: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => NewsDetail, newsDetail => newsDetail.news)
    details: NewsDetail[];

    @ManyToOne(() => Category, category => category.news)
    category: Category;

    @ManyToOne(() => Country, country => country.news)
    country: Country;

    @ManyToOne(() => User, user => user.news)
    created_by: User;

    @OneToMany(() => Image, image => image.news)
    images: Image[];
}