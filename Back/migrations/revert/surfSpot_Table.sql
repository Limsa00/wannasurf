-- Revert DBwannasurf:surfSpot_Table from pg

BEGIN;

ALTER TABLE "journey" DROP COLUMN "destination_surfspot_or_city_id";

DROP TABLE "surfspot";

COMMIT;
