-- name: CreateCategory :execresult
INSERT INTO categories (
  name, description, created_by, updated_by
) VALUES (
  ?, ?, ?, ?
);

-- name: GetCategory :one
SELECT * 
FROM categories
WHERE id = ?
LIMIT 1;


-- name: ListCategory :many
SELECT * 
FROM categories
ORDER BY id 
LIMIT ? OFFSET ?;

-- name: UpdateCategory :execresult
UPDATE categories
SET name = ?, description = ?, updated_by = ?, updated_at = CURRENT_TIMESTAMP
WHERE id = ?;

-- name: DeleteCategory :exec
DELETE FROM categories WHERE id = ?;
