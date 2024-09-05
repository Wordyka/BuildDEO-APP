-- name: CreateService :execresult
INSERT INTO services (
  seller_id, category_id, title, description, price, created_by, updated_by
) VALUES (
  ?, ?, ?, ?, ?, ?, ?
);

-- name: GetServiceBySeller :many
SELECT * 
FROM services
WHERE seller_id = ?;

-- name: GetServiceByID :one
SELECT * 
FROM services
WHERE id = ?
LIMIT 1;

-- name: ListService :many
SELECT * 
FROM services
ORDER BY id
LIMIT ? OFFSET ?;

-- name: UpdateService :execresult
UPDATE services
SET seller_id = ?, category_id = ?, title = ?, description = ?, price = ?, updated_by = ?, updated_at = CURRENT_TIMESTAMP
WHERE id = ?;

-- name: DeleteService :exec
DELETE FROM services WHERE id = ?;
