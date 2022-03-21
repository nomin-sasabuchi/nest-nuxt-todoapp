import { ItemStatus } from 'items/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//データベーステーブル（またはMongoDBを使用する場合はコレクション）にマップするクラス
//データの定義ファイル　= Entity
//DBマイグレーション　= Entityで定義したクラスを元にテーブルを生成・削除したり、カラムの変更をしたりする
@Entity()
export class Item {
  //自動インクリメント値=自動的に一意のシーケンス番号を生成する機能
  //が自動インクリメント値で自動的に生成されるプライマリ列を作成
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
