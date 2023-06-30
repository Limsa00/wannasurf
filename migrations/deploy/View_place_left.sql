-- Deploy DBwannasurf:View_place_left to pg

BEGIN;

CREATE VIEW traject_place_left AS
	SELECT 
		journey.id AS journey_id,
		journey.place_available AS place_offered,
		count(journey_has_user.user_id)::integer AS nb_place_booked,
		(journey.place_available - count(journey_has_user.user_id))::integer AS nb_place_left
	FROM journey_has_user
	JOIN journey ON journey.id = journey_has_user.journey_id
	GROUP BY journey.id
	ORDER BY journey.id;
    
COMMIT;
