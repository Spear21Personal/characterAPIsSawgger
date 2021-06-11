import exp from 'constants';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Race {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
   
    @Column()
    maxAge!: number;
   
    @Column({})
    minAge!: number;
   
    @Column()
    speed!: number;
   
    @Column("varchar", {length: 250})
    description!: string;

}