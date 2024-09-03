-- name: CreateUser :execresult
INSERT INTO users (
  email, password, name, phone, role, created_by, updated_by
) VALUES (
  ?, ?, ?, ?, ?, ?, ?
);

-- name: GetUser :one
SELECT * 
FROM users
WHERE id = ?
LIMIT 1;

-- name: ListUsers :many
SELECT * 
FROM users
ORDER BY id 
LIMIT ? OFFSET ?;

-- name: UpdateUser :execresult
UPDATE users
SET name = ?
WHERE id = ?;

-- name: DeleteUser :exec
DELETE FROM users WHERE id = ?;
