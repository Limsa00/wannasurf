-- Revert DBwannasurf:userTable from pg

BEGIN;

DROP TABLE "journey_has_user";
ALTER TABLE "journey" DROP COLUMN "driver_id";
DROP TABLE "user";

COMMIT;
