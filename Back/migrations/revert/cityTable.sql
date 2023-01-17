-- Revert DBwannasurf:cityTable from pg

BEGIN;

ALTER TABLE "journey" DROP COLUMN "departure_city";
ALTER TABLE "user" DROP COLUMN "city";
DROP TABLE "city";

COMMIT;
