DB_URL = postgresql://root:secret@localhost:5432/buildeo?sslmode=disable

postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

createdb:
	docker exec -ti postgres12 createdb --username=root --owner=root buildeo

dropdb:
	docker exec -ti postgres12 dropdb buildeo

migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up 

migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down 

sqlc:
	sqlc generate

.PHONY: postgres createdb dropdb migrateup migratedown sqlc