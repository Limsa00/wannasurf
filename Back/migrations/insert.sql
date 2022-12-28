BEGIN;

INSERT INTO "user"("firstname","lastname","gender","phone","email","city","password")
VALUES
  ('Ray','Marin','male','06 05 19 21 51','amet@google.couk','Cork','NYR72PPL0VO'),
  ('Wang','Reyes','male','04 17 74 85 27','semper.rutrum@icloud.couk','Banff','ZBC22NZJ6HJ'),
  ('Stone','Suarez','female','03 58 62 28 57','rhoncus.nullam@icloud.org','San Pedro','KJO43OGL1LS'),
  ('Kellie','Casado','female','04 64 63 48 48','elementum.sem@aol.ca','Los Angeles','NCU02XUI2IT'),
  ('Lilah','Pascual','female','08 17 67 69 73','eu.enim.etiam@protonmail.com','Coquimbo','QXQ51IHT2HT'),
  ('Bryar','Sanchez','male','07 02 18 48 22','lorem@outlook.couk','Gimhae','UDT74NBG0WC'),
  ('Joel','Jimenez','female','08 74 56 83 28','egestas.hendrerit.neque@icloud.net','Tabuk','OYY11MAT9LW'),
  ('Suki','Medina','female','01 14 38 20 63','nullam@icloud.org','Siquirres','OYE34TMW3OH'),
  ('Janna','Gonzalez','male','09 85 58 62 15','faucibus.id@aol.couk','Cork','QYN49FUB2HC'),
  ('Abraham','Ortega','female','08 91 66 79 02','elit.pharetra@icloud.org','Borongan','IHJ85KQD3YU'),
  ('Adrienne','Duran','female','07 18 00 44 16','sapien@outlook.couk','Pasig','UNF27TUI5RE'),
  ('Hu','Vicente','male','07 24 51 44 33','leo.morbi@icloud.ca','Munich','CXB52VSE2ZF'),
  ('Karen','Ramos','male','07 70 76 83 02','ipsum.porta@hotmail.edu','Municipal District','OWB00NQJ3IP'),
  ('Petra','Pardo','male','03 71 87 28 10','auctor.nunc.nulla@yahoo.edu','Chuncheon','RXN45WVD1NR'),
  ('Rhonda','Pardo','female','02 36 78 51 69','mi.fringilla.mi@protonmail.com','Maisires','LLV62CFJ7GT'),
  ('Mollie','Torres','male','07 74 49 92 13','orci.consectetuer@google.ca','Denpasar','PGI41VKF8HG'),
  ('Alika','Santana','female','04 47 07 31 51','amet@protonmail.edu','Bendigo','MGQ67QPA9PQ'),
  ('Joseph','Soto','female','05 21 14 07 72','turpis.in@yahoo.ca','Châtellerault','CLM44XFI6SC'),
  ('Alice','Torres','male','03 79 15 27 86','dolor.fusce.mi@aol.edu','Kostroma','QQK02QKA1GQ'),
  ('Devin','Gimenez','female','09 86 38 41 46','nam.consequat@protonmail.ca','Tehuacán','ZXE17NOV4DG');

INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed", "driver")
VALUES 
    ('Bordeaux', 'Lacanau', '5 av Thiers', '2023-01-01 08:00:00-00', 10, 2, 2, 6, 5 ),
    ('Dublin', 'Aguachica', 'Ap #478-2169 Est Avenue', '2022-02-16 4:47:52-00', 20, 3, 3, 6, 1 ),
    ('Quetta', 'Rio de Janeiro', '445-4747 A, Rd.', '2022-06-23 10:55:02-00', 90, 0, 1, 9, 3 ),
    ('Yangju', 'Piła', '728-1547 Et Avenue', '2022-11-27 9:30:50-00', 25, 1, 6, 9, 4 ),
    ('Puerto Princesa', 'Port Harcourt', 'Ap #536-4865 Vitae, St.', '2022-10-26 8:40:16-00', 23, 5, 7, 7, 7 ),
    ('Heredia', 'Słupsk', '805-6544 Auctor, Av.', '2022-02-13 5:14:35-00', 37, 1, 3, 8, 9 ),
    ('Villafranca dAsti', 'Tanjay', 'Ap #347-7327 Rutrum St.', '2022-02-17 10:53:28-00', 83, 2, 5, 9, 10 ),
    ('Cartagena', 'Celaya', '108-1723 Sem Street', '2022-03-20 10:03:43-00', 14, 2, 5, 6, 9 ),
    ('Vladimir', 'Chakwal', '633-4350 Dolor Road', '2022-03-12 1:10:32-00', 85, 4, 6, 10, 10 ),
    ('Warri', 'Ludvika', 'Ap #389-8738 In Avenue', '2022-11-14 4:48:44-00', 18, 4, 2, 6, 6 );


COMMIT;