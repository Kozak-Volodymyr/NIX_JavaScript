var mas=['Саша', 'Петя', 'Оксана'];
var mas2=mas.copyWithin=[...mas]
var safe=mas2[0]
mas2[0]=mas2[2]
mas2[2]=safe
mas2[1]="Олег"
