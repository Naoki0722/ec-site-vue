# frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## コーディング実装履歴

### 2021.02.06
デザインのコーディングについて実施。
表側のデザインのCSSについてはTailwindcssを用いて実装。
感触としては、CSSの場合、自分でクラス名を当てることで、CSS側で実装を確認していかないといけないが、
Tailwindcssの場合は、インライン記述の方式のため、すごく理解しやすい。
レスポンシブもlg:やmd:で簡単に実装できる。
インラインだとhtml側の記述が煩雑になる一方、そこだけを見て判断できるし、コード量も減らせると感じる。

### 2021.02.08 デザイン修正


### 2021.02.14 コードレビュー依頼
バックエンド(Laravel)とのつなぎ込みが完成した。
本番デプロイについては、Netlifyを使用する予定としており、Netlifyのformを使いたいため、staging環境としてデプロイした。

https://amazing-wilson-5152ff.netlify.app/

こちらはステージング環境として利用するため、githubはdevelopブランチと連携するようにしている。

カート機能とお気に入り機能は、ログインしたり会員登録していない人でもできるように実装した(Vuexのセッション保持を利用)

ログインしていない状態でカートに入れたものはログイン後にcartsテーブルに格納するようにもしている。

バックエンド(Laravel)は、Herokuを利用。

https://gentle-wildwood-14193.herokuapp.com/