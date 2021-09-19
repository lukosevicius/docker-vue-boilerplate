FROM nginx:stable

# Create volume for sockets
VOLUME /var/run/sockets

# Copy custom nginx config
COPY ./templates/nginx.conf /etc/nginx/conf.d/default.conf

# Edit nginx config to run under www-data user
RUN sed -i -r '/^user\s+nginx;/c\user www-data;' /etc/nginx/nginx.conf