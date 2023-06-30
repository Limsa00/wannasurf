-- Revert DBwannasurf:addingStatus from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "inscription-status";

ALTER TABLE "journey_has_user" DROP COLUMN "inscription-status";

COMMIT;
