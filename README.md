# nest/nuxt モノレポ環境

## 環境構築手順

- 1.root ディレクトリで下記コマンドを実行

```
$ yarn install --frozen-lockfile
docker-compose up -d
```

- 2.pgAdmin(http://localhost:81/)にアクセスして docker-compose.yaml と packages/nest/ormconfig.js の設定とをもとに DB を新規作成する

- 3.下記コマンドを実行して、データベースのマイグレーションを実行する

```
yarn workspace nest-project typeorm migration:run
```

## nest.js の API の使い方

### 事前準備

下記コマンドで nest サーバーを起動

```
yarn workspace nest-project start:dev
```

### API 使い方　例

#### ユーザー新規登録

status は PREMIUM と FREE がある。FREE は情報の閲覧しかできない

FREE アカウント

```
$ curl -X POST 'http://localhost:3000/auth/signup' -d 'username=ユーザー名&password=パスワード&status=ステータス
'
```

#### サインイン

response で accessToken が返却される

```
curl -X POST 'http://localhost:3000/auth/signin' -d 'username=ユーザー名&password=パスワード&status=ステータス'
```
