echo '============= BEGIN TO DEPLOY portfolio  =============' 

echo '==================================================================================' 
echo '1. Move into privated-projects directory >> cd /root/apps/privated-projects'  
echo '=================================================================================' 
cd /root/apps/privated-projects/
# school_cinquantenaire_api

#JOSUE ORG
echo '===========================================================' 
echo '2. post-receive: main.old and git fetch origin main... ' 
echo '============================================================' 
#sudo cp  proxibuy-back/.env  ../.env
rm  -rf portfolio
git clone git@github.com:MUHESI/portfolio.git
cd portfolio

#rm -rf node_modules 
echo '===============================' 
echo '5.1. yarn install ...' 
echo '===============================' 
nvm use v14.21.3
# npm i -g yarn
yarn install 

echo '===============================' 
echo '5.2.  yarn build ...' 
echo '===============================' 
yarn build

echo '=========================================================================' 
echo '6. DELETE  .next, node_modules and package.json IN /var/www/node-apps ...' 
echo '==========================================================================' 

sudo rm /var/www/node-apps/portfolio/.next -rf
sudo rm /var/www/node-apps/portfolio/node_modules -rf
sudo rm /var/www/node-apps/portfolio/package.json 
echo ' ls -a /var/www/node-apps/portfolio .....' 
ls -a  /var/www/node-apps/portfolio

echo '=======================================' 
echo '7.  MOVE DATA TO /var/www/node-apps ...' 
echo '=======================================' 
sudo cp -rf node_modules  /var/www/node-apps/portfolio
sudo cp -rf .next  /var/www/node-apps/portfolio
sudo cp -rf package.json  /var/www/node-apps/portfolio


rm -rf node_modules 
rm -rf .next 
echo '=========================================' 
echo '7.  pm2 stop AND start portfolio...' 
echo '=========================================' 
pm2 restart portfolio   
pm2 list
#pm2 monit
echo '=============END===============' 



