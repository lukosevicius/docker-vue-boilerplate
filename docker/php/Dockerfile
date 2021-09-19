FROM php:7.4-fpm

# Install required libs
RUN apt-get update && apt-get install -y libzip-dev unzip libpng-dev

# Install php extensions
RUN docker-php-ext-install pdo_mysql bcmath zip gd

# Custom configurations
COPY ./templates/php.conf /usr/local/etc/php-fpm.d/zzz-custom.conf

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --filename=composer --install-dir=/usr/local/bin

# Change workdir
WORKDIR /srv/www

CMD ["php-fpm"]
