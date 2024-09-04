package api

import (
	"fmt"

	db "github.com/Oppir07/BuildDEO-APP/db/sqlc"
	"github.com/Oppir07/BuildDEO-APP/token"
	"github.com/Oppir07/BuildDEO-APP/util"
	"github.com/gin-gonic/gin"
)

// Server serves HTTP requests for service
type Server struct {
	config     util.Config
	store      db.Store
	tokenMaker token.Maker
	router     *gin.Engine
}

// NewServer creates a new HTTP server and setup routing.
func NewServer(config util.Config, store db.Store) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		config:     config,
		store:      store,
		tokenMaker: tokenMaker,
	}

	server.setupRouter()
	return server, nil
}

func (server *Server) setupRouter() {
	router := gin.Default()

	
	//authentication
	router.POST("/users/login", server.loginUser)
	router.POST("/users", server.createUser)

	authRoutes := router.Group("/").Use(authMiddleware(server.tokenMaker))

	// user management
	authRoutes.GET("/users/:id", server.getUser)
	authRoutes.GET("/users", server.listUser)
	authRoutes.PUT("/users/:id", server.updateUser)
	authRoutes.DELETE("/users/:id", server.deleteUser)


	server.router = router
}

// Start runs the HTTP server on a specific address.
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
