package api

import (
	"net/http"

	db "github.com/Oppir07/BuildDEO-APP/db/sqlc"
	"github.com/gin-gonic/gin"
)

type createUserRequest struct {
	Email     string `json:"email" binding:"required"`
	Password  string `json:"password" binding:"required"`
	Name      string `json:"name" binding:"required"`
	Phone     string `json:"phone" binding:"required"`
	Role      string `json:"role" binding:"required,oneof=buyer seller admin"`
	CreatedBy int64  `json:"created_by" binding:"required"`
	UpdatedBy int64  `json:"updated_by" binding:"required"`
}

func (server *Server) createUser(ctx *gin.Context) {
	var req createUserRequest
	if err := ctx.ShouldBindBodyWithJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.CreateUserParams{
		Email: req.Email,
		Password: req.Password,
		Name: req.Name,
		Phone: req.Phone,
		Role: req.Role,
		CreatedBy: req.CreatedBy,
		UpdatedBy: req.UpdatedBy,
	}

	user, err := server.store.CreateUser(ctx, arg)
	if err!= nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, user)
}
