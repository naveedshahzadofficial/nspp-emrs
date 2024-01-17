## Installation
#### To install and run the project, follow these steps:

```bash
composer install
yarn install
yarn run dev
```
#### The Changing will auto compile:

```bash
yarn run watch
```
### Deploying code on the server:

Uncomment the output for production in webpack.config.js.
```bash
/*
output: {
path: path.resolve("./nspp_emrs"),
publicPath: "/nspp_emrs/",
}
*/
```
####  Build the project:
```bash
yarn run prod
```
copy bfc all folder into public/
```bash
cp nspp_emrs/js public/ -Rf
cp nspp_emrs/css public/ -Rf
cp nspp_emrs/fonts public/ -Rf
```
Add the updated code to Git:
```bash
git add .
git commit -m "Build:12-01-2024"
git push origin main
```

Must be added once into your local host

```bash
git remote add prod ssh://deploy-user@10.50.28.102:8888/var/www/vhosts/.gits/nspp_emrs-naveedsh-po.git
git remote add live ssh://deploy-user@10.50.28.102:8888/var/www/vhosts/.gits/nsppemr-live-deploy-user.git
```
Deploy the code on the server
```bash
git push prod main
```

Note: Be careful with server connections. If there are any issues with caching or permissions, connect to the server and run the following commands:
```bash
ssh -p 8888 deploy-user@10.50.28.102
cd /var/www/vhosts/webdev/nspp_emrs/
php artisan config:cache
sudo chmod 777 storage -Rf
```

Queue Worker
```
php artisan queue:work --log=/var/www/vhosts/nsppemr-live/storage/logs/worker.log > /dev/null 2>&1 &
```
