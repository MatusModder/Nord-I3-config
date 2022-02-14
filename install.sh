#!/usr/bin/env bash
# check if we have git
if ! [ -x "$(command -v git)" ]; then
  sudo pacman -S --noconfirm git
  exit 1
fi
if [ ! -f /usr/bin/yay ]; then
  echo "yay is not installed, installing yay"
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si
  cd ..
  rm -rf yay
fi
yay -Sy --needed --noconfirm - < pkgs.txt
cp -rvf .config/* ~/.config/
cp -rvf .themes/* ~/.themes/
