-- Deploy DBwannasurf:journeyTable to pg

BEGIN;

CREATE TABLE "journey" (
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"destination_surfspot_or_city" TEXT NOT NULL,
	"meeting_address" TEXT,
	"departure_time" TIMESTAMP NOT NULL,
	"price" INT NOT NULL,
	"place_available" INT NOT NULL,
	"number_of_boards_allowed" INT NOT NULL,
	"board_size_allowed" INT NOT NULL,
	"number_of_boards_loaded" INT	
);

COMMIT;
