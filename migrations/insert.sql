BEGIN;

INSERT INTO "city" ("cityName","zipCode","Country")
VALUES
  ('Bordeaux','33000','France'),
  ('Lacanau','33214','France'),
  ('Le Porge','33333','France'),
  ('Lège-Cap-Ferret','33950','France'),
  ('Cap-Ferret','33970','France'),
  ('Arcachon','33120','France'),
  ('Biscarosse','40600','France'),
  ('Mimizan','40200','France'),
  ('La Roche-sur-Yon','56432','France'),
  ('Chalon-sur-Saône','36286','France'),
  ('Caen','94878','France'),
  ('Nice','17187','France'),
  ('Lorient','48026','France'),
  ('Ajaccio','66723','France'),
  ('Colomiers','63652','France'),
  ('Orléans','17359','France'),
  ('Besançon','80778','France'),
  ('Creil','25992','France'),
  ('Brive-la-Gaillarde','95333','France'),
  ('Pontarlier','48567','France'),
  ('Limoges','22641','France'),
  ('Sète','68877','France'),
  ('Bastia','37188','France'),
  ('Chalon-sur-Saône','37917','France'),
  ('Liévin','66281','France'),
  ('Lanester','56824','France'),
  ('Saint-Quentin','83771','France'),
  ('Montpellier','03083','France'),
  ('Vannes','32743','France'),
  ('Albi','49258','France'),
  ('Limoges','43452','France'),
  ('Châtellerault','14774','France'),
  ('Saint-Louis','39633','France'),
  ('Forbach','21383','France'),
  ('Angoulême','74803','France'),
  ('Illkirch-Graffenstaden','98511','France'),
  ('Poitiers','61517','France'),
  ('Limoges','34867','France'),
  ('Salon-de-Provence','91901','France'),
  ('Ajaccio','56830','France'),
  ('Talence','11750','France'),
  ('Tournefeuille','54158','France'),
  ('Antibes','65443','France'),
  ('Angers','66289','France'),
  ('Vandoeuvre-lès-Nancy','38161','France'),
  ('Auxerre','44573','France'),
  ('Aurillac','46233','France'),
  ('Laval','43224','France'),
  ('Mulhouse','38638','France'),
  ('Laval','50817','France')
;

INSERT INTO "user"("firstname","lastname","gender","phone", "birthday", "uid","city_id","inscription-status")
VALUES
  ('Ray','Marin','male','06 05 19 21 51', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK0',1,true),
  ('Wang','Reyes','male','04 17 74 85 27', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK1',2,true),
  ('Stone','Suarez','female','03 58 62 28 57', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK2',3,true),
  ('Kellie','Casado','female','04 64 63 48 48', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK3',4,true),
  ('Lilah','Pascual','female','08 17 67 69 73', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK4',5,true),
  ('Bryar','Sanchez','male','07 02 18 48 22', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK5',6,true),
  ('Joel','Jimenez','female','08 74 56 83 28', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK6',7,true),
  ('Suki','Medina','female','01 14 38 20 63', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK7',8,true),
  ('Janna','Gonzalez','male','09 85 58 62 15', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK8',9,true),
  ('Abraham','Ortega','female','08 91 66 79 02', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFK9',10,true),
  ('Adrienne','Duran','female','07 18 00 44 16', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW0',11,true),
  ('Hu','Vicente','male','07 24 51 44 33', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW1',12,true),
  ('Karen','Ramos','male','07 70 76 83 02', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW2',13,true),
  ('Petra','Pardo','male','03 71 87 28 10', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW3',14,true),
  ('Rhonda','Pardo','female','02 36 78 51 69', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW4',15,true),
  ('Mollie','Torres','male','07 74 49 92 13', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW5',16,true),
  ('Alika','Santana','female','04 47 07 31 51', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW6',17,true),
  ('Joseph','Soto','female','05 21 14 07 72', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW7',18,true),
  ('Alice','Torres','male','03 79 15 27 86', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW8',19,true),
  ('Devin','Gimenez','female','09 86 38 41 46', '1997-11-10', 'tGiwoCGlyBMOduwYexpZfuQIOFW9',20,true)
;

INSERT INTO "surfspot" ("surfspotName","difficulty","city_id")
VALUES
  ('Plage Centrale',9,2),
  ('Plage Sud',0,2),
  ('Plage Nord',4,2),
  ('Le Porge',8,3),
  ('La Jenny',0,3),
  ('Le Grand Crohot',7,4),
  ('Le Truc vert',10,4),
  ('La Torchère',6,4),
  ('L\"horizon',9,5),
  ('La pointe',6,5),
  ('La lagune',7,6),
  ('La Salie',4,6),
  ('Biscarosse plage',4,7),
  ('Biscarosse plage Nord',8,7),
  ('Biscarosse plage Surd',2,7),
  ('Plage Remember',10,8),
  ('Plage Sud',7,8),
  ('Lespecier',7,8)
;

INSERT INTO "journey" ("departure_city_id", "destination_surfspot_or_city_id", "meeting_address", "departure_date", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed", "driver_id")
VALUES 
  (1, '1', '5 av Thiers', '2023-01-19T12:00:00', '08:00:00', 10, 2, 2, 6, 5 ),
  (2, '2', 'Ap #478-2169 Est Avenue', '2023-01-19T12:00:00', '4:47:52', 20, 3, 3, 6, 1 ),
  ('3', '3', '445-4747 A, Rd.', '2023-01-19T12:00:00', '10:55:02', 90, 1, 1, 9, 3 ),
  ('4', '4', '728-1547 Et Avenue', '2023-01-20T12:00:00', '9:30:50', 25, 4, 6, 9, 4 ),
  ('5', '5', 'Ap #536-4865 Vitae, St.', '2023-01-21T12:00:00', '8:40:16', 23, 5, 7, 7, 7 ),
  ('6', '6', '805-6544 Auctor, Av.', '2023-01-23T12:00:00', '5:14:35', 37, 3, 3, 8, 9 ),
  ('7', '7', 'Ap #347-7327 Rutrum St.', '2023-01-23T12:00:00', '10:53:28', 83, 2, 5, 9, 10 ),
  ('8', '8', '108-1723 Sem Street', '2023-01-25T12:00:00', '10:03:43', 14, 2, 5, 6, 9 ),
  ('9', '9', '633-4350 Dolor Road', '2023-01-26T12:00:00', '11:10:32', 85, 4, 6, 10, 10 ),
  ('10', '10', 'Ap #389-8738 In Avenue', '2023-01-27T12:00:00', '4:48:44', 18, 4, 2, 6, 6 )
;

INSERT INTO "journey_has_user" ("journey_id", "user_id","inscription-status")
VALUES
  -- Je commente les valeurs relatives au conducteur (pas nécessaire d'inclure le conducteur aussi en tant que passager)
  /*(1,5,true),*/(1,2,true),(1,1,true),/*(2,1,true),*/(2,3,true),(2,4,true),/*(3,1,true),*/(3,5,true),/*(4,4,true),*/(4,1,true),/*(5,7,true),*/(5,19,true),/*(6,9,true),*/(6,18,true),(6,17,true),/*(7,10,true),*/(7,16,true),(7,1,true),/*(8,9,true),*/(8,14,true),(8,10,true),/*(9,10,true),*/(9,9,true),(9,15,true),(9,1,true)/*,(10,6,true)*/
;

COMMIT;