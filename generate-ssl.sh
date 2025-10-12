mkdir -p ssl logs/nginx

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/key.pem \
  -out ssl/cert.pem \
  -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

chmod -R 400 ssl/*

echo "SSL certificates generated in ssl/ directory"
echo "You can now start the application with: docker-compose up --build"
