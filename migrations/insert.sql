BEGIN;

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed") VALUES ('Bordeaux', 'Lacanau', '5 av Thiers', '2023-01-01 08:00:00-00', '10', '2', '2', '6');

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Dublin', 'Aguachica', 'Ap #478-2169 Est Avenue', '2022-02-16 4:47:52-00', 20, 3, 3, 6, 1 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Quetta', 'Rio de Janeiro', '445-4747 A, Rd.', '2022-06-23 10:55:02-00', 90, 0, 1, 9, 3 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Yangju', 'Piła', '728-1547 Et Avenue', '2022-11-27 9:30:50-00', 25, 1, 6, 9, 4 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Puerto Princesa', 'Port Harcourt', 'Ap #536-4865 Vitae, St.', '2022-10-26 8:40:16-00', 23, 5, 7, 7, 7 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Heredia', 'Słupsk', '805-6544 Auctor, Av.', '2022-02-13 5:14:35-00', 37, 1, 3, 8, 9 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Villafranca dAsti', 'Tanjay', 'Ap #347-7327 Rutrum St.', '2022-02-17 10:53:28-00', 83, 2, 5, 9, 10 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Cartagena', 'Celaya', '108-1723 Sem Street', '2022-03-20 10:03:43-00', 14, 2, 5, 6, 9 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Vladimir', 'Chakwal', '633-4350 Dolor Road', '2022-03-12 1:10:32-00', 85, 4, 6, 10, 10 );

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded") 
VALUES ('Warri', 'Ludvika', 'Ap #389-8738 In Avenue', '2022-11-14 4:48:44-00', 18, 4, 2, 6, 6 );

COMMIT;