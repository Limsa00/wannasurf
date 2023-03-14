-- Revert DBwannasurf:VIEW_nb_place_booked from pg

BEGIN;

DROP VIEW nb_place_booked;

COMMIT;
