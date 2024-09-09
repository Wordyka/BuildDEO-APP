package api

import (
	"database/sql"
	"net/http"
	"strconv"
	"time"

	db "github.com/Oppir07/BuildDEO-APP/db/sqlc"
	"github.com/gin-gonic/gin"
)

type createCategoryRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description" binding:"required"`
	CreatedBy   int64  `json:"created_by" binding:"required"`
	UpdatedBy   int64  `json:"updated_by" binding:"required"`
}

type categoryResponse struct {
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	CreatedAt   string `json:"created_at"`
	CreatedBy   int64  `json:"created_by"`
	UpdatedAt   string `json:"updated_at"`
	UpdatedBy   int64  `json:"updated_by"`
}

func newCategoryResponse(category db.Category) categoryResponse {
	return categoryResponse{
		ID:          category.ID,
		Name:        category.Name,
		Description: category.Description.String,
		CreatedAt:   category.CreatedAt.Format(time.RFC3339),
		CreatedBy:   category.CreatedBy,
		UpdatedAt:   category.UpdatedAt.Format(time.RFC3339),
		UpdatedBy:   category.UpdatedBy,
	}
}

func (server *Server) createCategory(ctx *gin.Context) {
	var req createCategoryRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.CreateCategoryParams{
		Name:        req.Name,
		Description: sql.NullString{String: req.Description, Valid: true},
		CreatedBy:   req.CreatedBy,
		UpdatedBy:   req.UpdatedBy,
	}

	category, err := server.store.CreateCategory(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	categoryID, err := category.LastInsertId()

	result, err := server.store.GetCategory(ctx, categoryID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	rsp := newCategoryResponse(result)
	ctx.JSON(http.StatusOK, rsp)
}

type getCategoryRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}

func (server *Server) getCategory(ctx *gin.Context) {
	var req getCategoryRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	category, err := server.store.GetCategory(ctx, req.ID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	rsp := newCategoryResponse(category)
	ctx.JSON(http.StatusOK, rsp)
}

type listCategoryRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) listCategory(ctx *gin.Context) {
	var req listCategoryRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListCategoryParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	categories, err := server.store.ListCategory(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, categories)
}

type updateCategoryRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description" binding:"required"`
	UpdatedBy   int64  `json:"updated_by" binding:"required"`
}

func (server *Server) updateCategory(ctx *gin.Context) {
	idParam := ctx.Param("id")
	id, err := strconv.ParseInt(idParam, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	var req updateCategoryRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.UpdateCategoryParams{
		ID:          id,
		Name:        req.Name,	
		Description: sql.NullString{String: req.Description, Valid: true},
		UpdatedBy:   req.UpdatedBy,
	}

	_, err = server.store.UpdateCategory(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	category, err := server.store.GetCategory(ctx, id)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	rsp := newCategoryResponse(category)
	ctx.JSON(http.StatusOK, rsp)
}

type deleteCategoryRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}

func (server *Server) deleteCategory(ctx *gin.Context) {
	var req deleteCategoryRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	err := server.store.DeleteCategory(ctx, req.ID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "category deleted successfully"})
}
