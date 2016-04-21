FROM php:7.0.5-fpm
ENV BIN_DIR /usr/local/bin/
RUN mkdir -pv /src
WORKDIR /src
VOLUME /src
EXPOSE 80 443 8080
EXPOSE 443
ADD config/php.ini /usr/local/etc/php/
RUN echo deb http://ftp.us.debian.org/debian jessie main > /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y zip
RUN curl https://getcomposer.org/download/1.0.2/composer.phar > $BIN_DIR/composer && \
    chmod +x $BIN_DIR/composer
ADD config/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]