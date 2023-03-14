# wannasurf
----POSTGRESQL----
- sudo service postgresql start
- sudo -u postgres psql
- sudo -i -u postgres
- psql -U salim -d wannasurf
- psql -U salim -d wannasurf -f migrations/insert.sql

----SQITCH----

Install (linux) : sudo apt install sqitch libdbd-pg-perl

configs :
- sqitch init DBwannasurf --engine pg --top-dir migrations --uri https://github.com/Limsa00/wannasurf
- sqitch config --user engine.pg.client psql
- sqitch config --user user.name 'salim'
- sqitch config --user user.email 'bennis.salim@gmail.com'
- sqitch target add origin db:pg:wannasurf


- Affichers configuration : sqitch config -l



- sqitch add journeyTables -n 'création de la table Journey'