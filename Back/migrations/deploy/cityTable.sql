-- Deploy DBwannasurf:cityTable to pg

BEGIN;

CREATE TABLE "city" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "cityName" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "Country" TEXT NOT NULL
);

ALTER TABLE "user" ADD COLUMN "city_id" INT REFERENCES "city"(id);

ALTER TABLE "journey" ADD COLUMN "departure_city_id" INT NOT NULL REFERENCES "city"(id);

COMMIT;
