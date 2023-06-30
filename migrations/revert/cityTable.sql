-- Revert DBwannasurf:cityTable from pg

BEGIN;

ALTER TABLE "journey" DROP COLUMN "departure_city_id";
ALTER TABLE "user" DROP COLUMN "city_id";
DROP TABLE "city";

COMMIT;
