# wannasurf
----POSTGRESQL----

POUR METTRE EN PLACE LA BASE DE DONNEE SUIVRE LES COMMANDES CI DESSOUS :
- sudo service postgresql start
- sudo -u postgres psql
- CREATE DATABASE wannasurf WITH OWNER salim;
- sudo -i -u postgres
- psql -U salim -d wannasurf (pas obligatoire car fait via sqitch)
- psql -U salim -d wannasurf -f migrations/insert.sql (pas obligatoire car fait via sqitch)
- sqitch deploy db:pg:wannasurf

----SQITCH----

Install (linux) : sudo apt install sqitch libdbd-pg-perl

Configs :
- sqitch init DBwannasurf --engine pg --top-dir migrations --uri https://github.com/Limsa00/wannasurf
- sqitch config --user engine.pg.client psql
- sqitch config --user user.name 'salim'
- sqitch config --user user.email 'bennis.salim@gmail.com'
- sqitch target add origin db:pg:wannasurf

- Afficher configuration sqitch : sqitch config -l

- Pour ajouter une nouvelle migration vai sqitch : sqitch add nomDeLaMigration -n 'description de la migration'