h1. Ackro.succ #2

!>/images/ackro-succ-thumb.png(Ackro.succs rspec result)!:http://pb.enti.ty/images/ackro-succ-big.png



Yay, es geht gut vorran. Das neue Ackro--wobei ich über eine
namensänderung nachdenke--nimmt gestalt an. Die dinge die mich in der
alten Version genervt haben wurden sozusagen im Keim erstickt.

Das component system ist sauberer gestaltet und auch das angehängte
Plugin modul lässt viel freiräume. Das Tumblog kennt jetzt eine liste
default Plugins (z.Z.
"Tags":http://ackro.ath.cx/~mit/hg/backbite/file/d850c3dff32a/spec_skel/plugins/tags.rb
und
"Date":http://ackro.ath.cx/~mit/hg/backbite/file/d850c3dff32a/spec_skel/plugins/date.rb),
und fügt diese automatisch dem Component hinzu. Für die configuration
des Plugins fügt man einfach die plugin definition dem Component
hinzu.

Ein gedanke den ich schon von anfang an hegte war den kompletten
HTML(HyperTextMarkupLanguage) tree <code>rw</code> im Plugin zur
verfügung zu stellen, z.B. um eine TOC(TableOfContents) an einer
anderen stelle zu appenden --
"Hpricot":http://code.whytheluckystiff.net/hpricot/ machts möglich
(wenn auch nicht immer so schön wie ich es gerne hätte).

h2. Potentielle probelme/Ideen

* Archiv -- wie? Gerade schwebt mir eine wöchentliche rotation vor..
* Automatische plugins -- wie der name sagt, plugins die keinerlei userinteraktion fordern (wieder das bsp. mit der TOC)
* fiese system() calls -- die müssen weg, glaube ich... Aber.. ich scheiss ja eh auf portability
* Dynamisches "Ramaze":http://ramaze.rubyforge.org/ frontend

h2. Links

* "hg repos":http://ackro.ath.cx/~mit/hg/ackro.suc/
* "rdoc":http://ackro.ath.cx/~mit/doc/ackro.suc/rdoc/

h2. Update

# Umgenannt zu +backbite+.

p(np). NP: Beethoven - emperor
