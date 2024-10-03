# Use an official nginx image as the base image
FROM nginx:latest

# Copy the HTML, CSS, JS, and image files to the nginx server
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY white.jpg /usr/share/nginx/html/white.jpg
COPY black.jpg /usr/share/nginx/html/black.jpg
COPY blue.jpg /usr/share/nginx/html/blue.jpg
COPY green.jpg /usr/share/nginx/html/green.jpg

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]