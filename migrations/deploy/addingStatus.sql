-- Deploy DBwannasurf:addingStatus to pg

BEGIN;

ALTER TABLE "journey_has_user" ADD COLUMN "inscription-status" BOOLEAN default true;

ALTER TABLE "user" ADD COLUMN "inscription-status" BOOLEAN default true;

COMMIT;
