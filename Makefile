

setup:
	sudo apt install docker-compose

start: mongo.pem
	docker-compose up -d

start-docker:
	sudo service docker start

mongo.pem:
	cat certificate.pem test.key > mongo.pem

certificate.pem:
	echo "creating keys for mongo bi"
	openssl req -newkey rsa:2048 \
				-nodes -keyout test.key \
				-x509 -days 365 \
				-out certificate.pem
