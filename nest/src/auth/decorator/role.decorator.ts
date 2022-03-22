import { SetMetadata } from '@nestjs/common';

/**
 * Role = 認可が必要なRoleを受け取り、Metaデータに登録する
 * @param statuses
 * @returns
 */
export const Role = (...statuses: string[]) =>
  SetMetadata('statuses', statuses);
