-- Deploy DBwannasurf:surfSpot_Table to pg

BEGIN;

CREATE TABLE "surfspot" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "surfspotName" TEXT NOT NULL,
    "difficulty" integer,
    "city_id" integer NOT NULL REFERENCES "city"(id)
);

ALTER TABLE "journey" ADD COLUMN "destination_surfspot_or_city_id" INT NOT NULL REFERENCES "surfspot"(id);

COMMIT;
