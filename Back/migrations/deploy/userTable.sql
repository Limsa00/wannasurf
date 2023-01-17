-- Deploy DBwannasurf:userTable to pg

BEGIN;

CREATE TABLE "user" (
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"firstname" TEXT NOT NULL,
	"lastname" TEXT NOT NULL,
	"gender" TEXT,
    "phone" TEXT,
	"email" TEXT NOT NULL UNIQUE,
    "email_check" BOOLEAN default false,
    "password" TEXT NOT NULL,
    "image_link" TEXT,
    "role" TEXT DEFAULT 'normal'
);

ALTER TABLE "journey" ADD COLUMN "driver" INT NOT NULL REFERENCES "user"(id);

CREATE TABLE "journey_has_user"(
    "journey_id" INT NOT NULL references "journey"(id) ON DELETE CASCADE,
    "user_id" INT NOT NULL references "user"(id) ON DELETE CASCADE,
    PRIMARY KEY ("journey_id", "user_id")
);

COMMIT;
