#!/bin/bash

# Перехід у директорію проекту
cd /media/sf_Portfolio/cyberdev3 || exit 1

# Видалення проблемного файлу
rm -f _site/minimal-mistakes-jekyll.gemspec

# Встановлення залежностей
bundle install

# Запуск сервера
bundle exec jekyll serve
