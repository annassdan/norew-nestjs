import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pengunjung'})
export class PengunjungEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nama: string;

  @Column({ type: 'text'})
  alamat: string;


}
