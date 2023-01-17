-- Deploy DBwannasurf:cityTable to pg

BEGIN;

CREATE TABLE "city" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "cityName" TEXT NOT NULL,
    "zipCode" TEXT,
    "Country" TEXT
);

ALTER TABLE "user" ADD COLUMN "city" INT REFERENCES "city"(id);

ALTER TABLE "journey" ADD COLUMN "departure_city" INT NOT NULL REFERENCES "city"(id);

COMMIT;
