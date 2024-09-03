package main

import (
	"database/sql"
	"log"

	"github.com/Oppir07/BuildDEO-APP/api"
	db "github.com/Oppir07/BuildDEO-APP/db/sqlc"
	_ "github.com/go-sql-driver/mysql"
)

const (
	dbDriver      = "mysql"
	dbSource      = "dbo00113303:Xwd_$331pWq@tcp(127.0.0.1:3307)/db00113303?parseTime=true&loc=Local"
	ServerAddress = "127.0.0.1:8080"
)

func main() {
	conn, err := sql.Open(dbDriver, dbSource)
	if err != nil {
		log.Fatal("cannot connect to db:", err)
	}

	store := db.NewStore(conn)

	server := api.NewServer(store)

	err = server.Start(ServerAddress)

	if err != nil {
		log.Fatal("cannot start server")
	}

}
