# 部署dist文件夹脚本
npm run build

# 复制图标及Readme文档
cp -a favicon.ico README.md dist

cd ./dist

# 如果是发布到自定义域名
echo 'www.gaotianyang.top' > CNAME

git init
git add -A
git commit -m 'deploy'
git pull

# 部署至master分支
git push -f git@github.com:mitudegaoyang/Resume.git master

cd -
