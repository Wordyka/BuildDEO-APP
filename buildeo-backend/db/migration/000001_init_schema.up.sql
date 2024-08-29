CREATE TABLE "users" (
  "id" BIGSERIAL PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "name" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "role" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "categories" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "services" (
  "id" BIGSERIAL PRIMARY KEY,
  "seller_id" bigint NOT NULL,
  "category_id" bigint NOT NULL,
  "title" varchar NOT NULL,
  "description" text,
  "price" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "service_photos" (
  "id" BIGSERIAL PRIMARY KEY,
  "service_id" bigint NOT NULL,
  "photo_url" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "requests" (
  "id" BIGSERIAL PRIMARY KEY,
  "customer_id" bigint NOT NULL,
  "category_id" bigint NOT NULL,
  "title" varchar NOT NULL,
  "description" text,
  "budget" bigint NOT NULL,
  "deadline" timestamptz NOT NULL,
  "status" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "offers" (
  "id" BIGSERIAL PRIMARY KEY,
  "service_id" bigint NOT NULL,
  "request_id" bigint NOT NULL,
  "seller_id" bigint NOT NULL,
  "price" bigint NOT NULL,
  "description" text,
  "status" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "chats" (
  "id" BIGSERIAL PRIMARY KEY,
  "user1_id" bigint NOT NULL,
  "user2_id" bigint NOT NULL,
  "status" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "messages" (
  "id" BIGSERIAL PRIMARY KEY,
  "chat_id" bigint NOT NULL,
  "sender_id" bigint NOT NULL,
  "content" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "shopping_baskets" (
  "id" BIGSERIAL PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "basket_items" (
  "id" BIGSERIAL PRIMARY KEY,
  "basket_id" bigint NOT NULL,
  "service_id" bigint NOT NULL,
  "quantity" int NOT NULL,
  "price" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "transactions" (
  "id" BIGSERIAL PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "basket_id" bigint NOT NULL,
  "amount" bigint NOT NULL,
  "payment_method" varchar NOT NULL,
  "status" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "reviews" (
  "id" BIGSERIAL PRIMARY KEY,
  "reviewer_id" bigint NOT NULL,
  "reviewee_id" bigint NOT NULL,
  "service_id" bigint NOT NULL,
  "rating" int NOT NULL,
  "comment" text,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE TABLE "quotations" (
  "id" BIGSERIAL PRIMARY KEY,
  "category_id" bigint NOT NULL,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "address" text NOT NULL,
  "document_url" varchar NOT NULL,
  "status" varchar NOT NULL,
  "admin_id" bigint,
  "admin_notes" text,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "created_by" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_by" bigint NOT NULL
);

CREATE INDEX ON "users" ("email");

CREATE INDEX ON "users" ("role");

CREATE INDEX ON "categories" ("name");

CREATE INDEX ON "services" ("seller_id");

CREATE INDEX ON "services" ("category_id");

CREATE INDEX ON "service_photos" ("service_id");

CREATE INDEX ON "requests" ("customer_id");

CREATE INDEX ON "requests" ("category_id");

CREATE INDEX ON "requests" ("status");

CREATE INDEX ON "offers" ("service_id");

CREATE INDEX ON "offers" ("request_id");

CREATE INDEX ON "offers" ("seller_id");

CREATE INDEX ON "offers" ("status");

CREATE INDEX ON "chats" ("user1_id");

CREATE INDEX ON "chats" ("user2_id");

CREATE INDEX ON "chats" ("user1_id", "user2_id");

CREATE INDEX ON "messages" ("chat_id");

CREATE INDEX ON "messages" ("sender_id");

CREATE INDEX ON "shopping_baskets" ("user_id");

CREATE INDEX ON "basket_items" ("basket_id");

CREATE INDEX ON "basket_items" ("service_id");

CREATE INDEX ON "transactions" ("user_id");

CREATE INDEX ON "transactions" ("basket_id");

CREATE INDEX ON "transactions" ("status");

CREATE INDEX ON "reviews" ("reviewer_id");

CREATE INDEX ON "reviews" ("reviewee_id");

CREATE INDEX ON "reviews" ("service_id");

CREATE INDEX ON "quotations" ("category_id");

CREATE INDEX ON "quotations" ("email");

CREATE INDEX ON "quotations" ("status");

CREATE INDEX ON "quotations" ("admin_id");

COMMENT ON COLUMN "users"."role" IS 'buyer, seller, or admin';

COMMENT ON COLUMN "requests"."status" IS 'open, closed, or fulfilled';

COMMENT ON COLUMN "offers"."status" IS 'pending, accepted, or rejected';

COMMENT ON COLUMN "chats"."status" IS 'active or restricted';

COMMENT ON COLUMN "transactions"."status" IS 'pending, completed, or failed';

COMMENT ON COLUMN "quotations"."status" IS 'on process, rejected, or done';

ALTER TABLE "users" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "categories" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "categories" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "services" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "services" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "service_photos" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "service_photos" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "requests" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "requests" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "offers" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "offers" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "chats" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "chats" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "shopping_baskets" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "shopping_baskets" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "basket_items" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "basket_items" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "services" ADD FOREIGN KEY ("seller_id") REFERENCES "users" ("id");

ALTER TABLE "services" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "service_photos" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

ALTER TABLE "requests" ADD FOREIGN KEY ("customer_id") REFERENCES "users" ("id");

ALTER TABLE "requests" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "offers" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

ALTER TABLE "offers" ADD FOREIGN KEY ("request_id") REFERENCES "requests" ("id");

ALTER TABLE "offers" ADD FOREIGN KEY ("seller_id") REFERENCES "users" ("id");

ALTER TABLE "chats" ADD FOREIGN KEY ("user1_id") REFERENCES "users" ("id");

ALTER TABLE "chats" ADD FOREIGN KEY ("user2_id") REFERENCES "users" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("chat_id") REFERENCES "chats" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("sender_id") REFERENCES "users" ("id");

ALTER TABLE "shopping_baskets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "basket_items" ADD FOREIGN KEY ("basket_id") REFERENCES "shopping_baskets" ("id");

ALTER TABLE "basket_items" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("basket_id") REFERENCES "shopping_baskets" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("reviewer_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("reviewee_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "quotations" ADD FOREIGN KEY ("admin_id") REFERENCES "users" ("id");
