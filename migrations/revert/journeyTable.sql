-- Revert DBwannasurf:journeyTable from pg

BEGIN;

DROP TABLE "journey";

COMMIT;
