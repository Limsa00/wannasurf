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


INSERT INTO "user"("firstname","lastname","gender","phone","email","city_id","password")
VALUES
  ('Ray','Marin','male','06 05 19 21 51','amet@google.couk',1,'NYR72PPL0VO'),
  ('Wang','Reyes','male','04 17 74 85 27','semper.rutrum@icloud.couk',2,'ZBC22NZJ6HJ'),
  ('Stone','Suarez','female','03 58 62 28 57','rhoncus.nullam@icloud.org',3,'KJO43OGL1LS'),
  ('Kellie','Casado','female','04 64 63 48 48','elementum.sem@aol.ca',4,'NCU02XUI2IT'),
  ('Lilah','Pascual','female','08 17 67 69 73','eu.enim.etiam@protonmail.com',5,'QXQ51IHT2HT'),
  ('Bryar','Sanchez','male','07 02 18 48 22','lorem@outlook.couk',6,'UDT74NBG0WC'),
  ('Joel','Jimenez','female','08 74 56 83 28','egestas.hendrerit.neque@icloud.net',7,'OYY11MAT9LW'),
  ('Suki','Medina','female','01 14 38 20 63','nullam@icloud.org',8,'OYE34TMW3OH'),
  ('Janna','Gonzalez','male','09 85 58 62 15','faucibus.id@aol.couk',9,'QYN49FUB2HC'),
  ('Abraham','Ortega','female','08 91 66 79 02','elit.pharetra@icloud.org',10,'IHJ85KQD3YU'),
  ('Adrienne','Duran','female','07 18 00 44 16','sapien@outlook.couk',11,'UNF27TUI5RE'),
  ('Hu','Vicente','male','07 24 51 44 33','leo.morbi@icloud.ca',12,'CXB52VSE2ZF'),
  ('Karen','Ramos','male','07 70 76 83 02','ipsum.porta@hotmail.edu',13,'OWB00NQJ3IP'),
  ('Petra','Pardo','male','03 71 87 28 10','auctor.nunc.nulla@yahoo.edu',14,'RXN45WVD1NR'),
  ('Rhonda','Pardo','female','02 36 78 51 69','mi.fringilla.mi@protonmail.com',15,'LLV62CFJ7GT'),
  ('Mollie','Torres','male','07 74 49 92 13','orci.consectetuer@google.ca',16,'PGI41VKF8HG'),
  ('Alika','Santana','female','04 47 07 31 51','amet@protonmail.edu',17,'MGQ67QPA9PQ'),
  ('Joseph','Soto','female','05 21 14 07 72','turpis.in@yahoo.ca',18,'CLM44XFI6SC'),
  ('Alice','Torres','male','03 79 15 27 86','dolor.fusce.mi@aol.edu',19,'QQK02QKA1GQ'),
  ('Devin','Gimenez','female','09 86 38 41 46','nam.consequat@protonmail.ca',20,'ZXE17NOV4DG')
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
  ('3', '3', '445-4747 A, Rd.', '2023-01-19T12:00:00', '10:55:02', 90, 0, 1, 9, 3 ),
  ('4', '4', '728-1547 Et Avenue', '2023-01-20T12:00:00', '9:30:50', 25, 1, 6, 9, 4 ),
  ('5', '5', 'Ap #536-4865 Vitae, St.', '2023-01-21T12:00:00', '8:40:16', 23, 5, 7, 7, 7 ),
  ('6', '6', '805-6544 Auctor, Av.', '2023-01-23T12:00:00', '5:14:35', 37, 1, 3, 8, 9 ),
  ('7', '7', 'Ap #347-7327 Rutrum St.', '2023-01-23T12:00:00', '10:53:28', 83, 2, 5, 9, 10 ),
  ('8', '8', '108-1723 Sem Street', '2023-01-25T12:00:00', '10:03:43', 14, 2, 5, 6, 9 ),
  ('9', '9', '633-4350 Dolor Road', '2023-01-26T12:00:00', '11:10:32', 85, 4, 6, 10, 10 ),
  ('10', '10', 'Ap #389-8738 In Avenue', '2023-01-27T12:00:00', '4:48:44', 18, 4, 2, 6, 6 )
;

INSERT INTO "journey_has_user" ("journey_id", "user_id")
VALUES
  (1,1),(1,2),(1,3),(2,3),(2,4),(3,5),(4,1),(4,4),(5,19),(6,18),(6,17),(7,16),(7,1),(8,14),(8,10),(9,9),(9,15),(9,1)
;

COMMIT;