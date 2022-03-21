import { EntityRepository, Repository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemStatus } from './types';
import { User } from 'entities/user.entity';

//Repository = EntityとDBの仲介役となるオブジェクト
//Repositoryを経由しデータベースを保存したり、データベースを取得したりする
//@EntityRepository(エンティティ名)　= nestjsがRepositoryであると認識する
//extends Repository<エンティティのクラス名> = データベースとのやりとりに必要な各種メソッドが使用可能になる
@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto, user: User): Promise<Item> {
    const { name, price, description } = createItemDto;
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      user,
    });
    await this.save(item);
    return item;
  }
}
