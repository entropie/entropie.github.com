h1. Backbite goes Stable

Yo,

kaum einer mag es Glauben, aber *backbite* nähert sich der ersten
final Release. Zur Zeit bin ich bei Version 'backbite-0.4.7', und bis
zu 0.5 möchte ich es Stable haben. Ich habe gerade Textfilter
hinzugefügt, welche auf verschiedene Art und weise den Content eines
Posts verändern können, sei es direkt in der YAML Source (für _now
playing_ zb.), oder auch für die diversen Exporter.

Das archiv funktioniert mittlerweile so gut wie automatisch, bei jedem
Export wird überprüft ob es posts gibt die aus der liste rausfallen,
welche dann automatisch archiviert werden. Wenn posts gelöscht werden,
wird im archiv die letzte post dieser Variante *un*archiviert.

Die Kommandozeilen Option "tlog sync" verarbeitet alle Posts im
_spool_ und schreibt die tags und auch das Archiv für den jeweiligen
Eintrag, was schlicht notwendig war um den Permalink Von Anfang an zur
verfügung zu stellen. Ich überlege noch ob ich mit jedem Post, teile
des Archivs und der Tags neu schreibe... bin mir aber nicht ganz
sicher ob das Sinn macht. Des öfteren, zb bei den mercurial commits,
mach ich nach 3 Minuten einen *Rollback* weil ich kleine Fehler
gefunden habe die nicht im Changeset auftauchen sollen. Da würde es
stören bei jedem post automatisch die ganze Tag/Archivierung Prozedur
auszuführen.

Als nächste werde ich die Suchfunktionen für alle arten von Posts
optimieren. Ich möchte in meinem aktuellen Repository *grep* benutzen
um Posts zu finden.

Der PDF Exporter ist z.Z. nicht benutzbar. Wenn ich schon PDFs benutzen
werde, will ich auch Bilder haben, und einigermassen Sinnvollen
Output, will heissen kein Plain Text, sondern "klickbare" links usw.
aber das ist eher Spielerei und nur eine frage der Zeit.

Ich habe 2 funktionierende Repositories zur Zeit. Es fehlt an nichts,
soweit ich das sagen kann. Wir werden sehen ob es irgendwann User
geben wird die Fehler finden, welche ich nicht kalkuliert habe.

p(np). NP(mplayer): lounge radio: dadamnphreaknoizphunk - i lost my suitcase in san marino from the white room