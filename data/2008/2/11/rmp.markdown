h1. rmp

Yo,

tjo, scheinbar hab ich zu viel Zeit. Für dieses Blog, und auch für die
täglich^Wnächtlichen IRC Sessions nutzt man schon ab und zu mal ein
*np* Script.

Das Problem dabei ist, das es unterschiedlichste quellen geben kann.
Grösstenteils benutze ich ja >>>tag(mpd), aber ab und zu auch
"mplayer":http://www.mplayerhq.hu/, oder mplayer in verbindung mit
"emms":http://www.gnu.org/software/emms/ um audiobooks oder streams zu
hören. Bei radio streams ist es auch mehr als nützlich schnell
erfahren zu können was denn gerade gespielt wird.

Naja, jedenfalls nervte es mich nicht immer NP zu bekommen wenn ich NP
tippte ;)

Naja, das resultat ist *rmp*, ein kleines multi-source fähiges und
leicht zu erweiterndes  NP
script, mit remote (SSH(SecureShell)) unterstüzung.

Derzeit unterstützte quellen: MPD, Amarok, Shell-FM, mplayer.

Mag einer sagen das wäre zu viel des betriebenen Aufwands... aber ich
wollte mal richtig schön Objekt Orientiert coden :)

Ausgabe:
<pre>
[ ~/S/backbite ] % np
NP(mplayer): lounge radio: cuban jass combo - remember cal from bongo express
[ ~/S/backbite ] % np ssh
NP(mpd@tie) Uffie - Pop the Glock (Original Mix)
</pre>

* "repos":http://www1.ackro.ath.cx/~mit/hg/home/hg/rmp

p(np). NP(mpd): Uffie - Pop the Glock (Original Mix)
