#!/bin/bash
# ---------------------------

echo "packer: update apt"
sudo apt-key update
sudo apt-get update
sudo apt-get install -y curl python aws-cli

echo "packer: nvm"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
. $HOME/.nvm/nvm.sh

echo '[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh' >> $HOME/.bashrc

echo "packer: nodejs"
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
npm update -g npm

echo "packer: precaching server dependencies"
mkdir -p $HOME/app/
cp -r /tmp/thornproxy $HOME/app/
npm install --prefix $HOME/app/thornproxy --production


