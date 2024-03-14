# Use the official PHP image as the base image
FROM php:7.4-apache

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the current directory contents into the container at /var/www/html
COPY . /var/www/html

# Install mysqli extension
RUN docker-php-ext-install mysqli

# Enable Apache rewrite module
RUN a2enmod rewrite

# Expose port 80 to the outside world
EXPOSE 80



# # Use the official PHP with Apache image
# FROM php:7.4-apache

# # Copy your backend code into the container
# COPY . /var/www/html

# # Expose port 80
# EXPOSE 80
