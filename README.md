# Synthgreeter
A minimalist lightdm webkit greeter theme

## Preview

## Installing

### Archlinux

`wget https://raw.githubusercontent.com/Landryl/synthgreeter/master/PKGBUILD`

and

`makepkg -si`

Then, edit your lightdm-webkit2-greeter.conf to enable the theme :

`webkit_theme = synthgreeter`

### Other distribution

`git clone https://github.com/Landryl/synthgreeter.git`

`sudo cp synthgreeter /usr/share/lightdm-webkit/themes`

Then, edit your lightdm-webkit-greeter.conf to enable the theme :

`webkit_theme = synthgreeter`
