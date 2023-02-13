-- Deploy DBwannasurf:VIEW_nb_place_booked to pg

BEGIN;

CREATE VIEW nb_place_booked AS
	SELECT 
		journey_id,
		count(*)::int AS nb_passengers 
	FROM journey_has_user
	/*WHERE journey_id = 1*/
	GROUP BY journey_id
	ORDER BY journey_id;

COMMIT;
