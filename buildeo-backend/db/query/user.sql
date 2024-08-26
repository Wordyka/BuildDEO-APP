-- name: CreateUser :one
INSERT INTO users (
  email, password, name, phone, role, created_by, updated_by
) VALUES (
  $1, $2, $3, $4, $5, $6, $7
)
RETURNING *;

-- name: GetUser :one
SELECT * 
FROM users
WHERE id = $1
LIMIT 1;

-- name: ListUsers :many
SELECT * 
FROM users
ORDER BY id ASC;

-- name: UpdateUser :one
UPDATE users
SET name = $2, email = $3, password = $4, phone = $5, role = $6, updated_at = now(), updated_by = $7
WHERE id = $1
RETURNING *;

-- name: DeleteUser :exec
DELETE FROM users WHERE id = $1;
