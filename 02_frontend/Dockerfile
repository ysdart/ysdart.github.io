# Vite + Vue 開発用。Alpineではなくbashが使えるDebian系を利用。
FROM node:22-bookworm

# コンテナ内の作業ディレクトリ（docker-compose のボリューム先と合わせる）
WORKDIR /02_frontend

# 依存関係のインストール（各種ロックファイルに対応）
# いずれかのロックファイルがある場合にそれを優先してインストールする
COPY package.json ./
COPY package-lock.json* ./
COPY yarn.lock* ./
COPY pnpm-lock.yaml* ./

ENV NODE_ENV=development \
    CHOKIDAR_USEPOLLING=true

# Corepackを有効化してpnpm/yarnにも対応
RUN corepack enable && \
    if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Viteのデフォルトポート
EXPOSE 5173

# デフォルトの起動コマンド（compose側で上書きされる場合あり）
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
