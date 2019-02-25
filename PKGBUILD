pkgname=lightdm-webkit-synthgreeter-git
_pkgname=synthgreeter
pkgver=1.0
pkgdesc="A minimalist lightdm-webkit-greeter theme"
arch=('any')
url="https://github.com/Landryl/synthgreeter"
license=('GPL3')
depends=('lightdm' 'lightdm-webkit2-greeter')
source=('git://github.com/Landryl/synthgreeter')
provides=('lightdm-webkit-synthgreeter')
conflicts=('lightdm-webkit-synthgreeter')
md5sums=('SKIP')
_gitname="synthgreeter"


package()
{
  cd ${pkgdir}
  mkdir -p usr/share/lightdm-webkit/themes
  cd usr/share/lightdm-webkit/themes
  cp -dpr --no-preserve=ownership ${srcdir}/${_gitname} ${_pkgname}
  msg "Removing .git files"
  cd ${_pkgname}
  rm -rf .git
  rm -f .gitignore
  echo "Removing dev files"
  rm -rf .git
  rm -f PKGBUILD
  rm -f preview.png
}
