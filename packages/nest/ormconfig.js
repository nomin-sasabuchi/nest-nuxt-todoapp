module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5430,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  //マイグレーションする際にどのentityを読み込むかの設定
  entities: ['dist/entities/*.entity.js'],
  //どのマイグレーションファイルを使用してマイグレーションするかの設定
  migrations: ['dist/migrations/*.js'],
  //CLIによってファイルが作成される際の出力先
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
