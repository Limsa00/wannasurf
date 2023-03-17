-- Revert DBwannasurf:View_place_left from pg

BEGIN;

DROP VIEW traject_place_left;

COMMIT;
