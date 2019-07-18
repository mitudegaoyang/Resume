# 部署dist文件夹脚本
# npm run build
git checkout master
rm -rf index.html static
cp -a ./dist/index.html ./dist/static ./
git add .
git commit -m '自动部署'
git pull
git push
git checkout dev
