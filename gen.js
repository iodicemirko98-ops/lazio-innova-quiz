/* Generatori di quesiti. Ogni funzione restituisce [argomento, domanda, [corretta, errata, errata, errata], spiegazione]
   con valori casuali, quindi ogni simulazione ha quesiti nuovi. Argomenti: num (numerica), ded (deduttiva), cal (calcoli tecnici). */
(function(){
"use strict";

function rnd(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

function fnum(n,d){
  if(d===undefined){d=Math.abs(n-Math.round(n))<1e-9?0:(Math.abs(n*10-Math.round(n*10))<1e-9?1:2);}
  var s=Math.abs(n).toFixed(d),p=s.split(".");
  p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return (n<0?"−":"")+p.join(",");
}
function eur(n){return fnum(n)+" €";}
function pc(n){return fnum(n)+"%";}

var MESI=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
var GIORNI=["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"];
function dstr(d){return d.getUTCDate()+" "+MESI[d.getUTCMonth()]+" "+d.getUTCFullYear();}
function addDays(d,n){return new Date(d.getTime()+n*86400000);}
function utc(y,m,day){return new Date(Date.UTC(y,m,day));}

/* Compone le 4 opzioni: la prima è la corretta. wrongs è un elenco di valori numerici plausibili. */
function mk(correct,wrongs,fmt){
  var seen={},out=[];
  function add(v){
    if(!isFinite(v))return;
    if(v<0&&correct>=0)return;
    var s=fmt(v);
    if(seen[s])return;
    seen[s]=1;out.push(s);
  }
  add(correct);
  wrongs.forEach(add);
  var step=Math.max(1,Math.round(Math.abs(correct)*0.1)),j=1;
  while(out.length<4&&j<40){add(correct+j*step);add(correct-j*step);j++;}
  return out.slice(0,4);
}

/* ───────── NUMERICA ───────── */
var NUM=[];

NUM.push(function(){
  var p=pick([5,10,15,20,25,30,35,40,45,60,65,75,80]),N=pick([40,60,80,120,160,200,240,320,400,480,600]);
  var r=N*p/100;
  var ctx=pick(["di una spesa di","di un contributo di","di un importo di"]);
  return ["num","Quanto vale il "+p+"% "+ctx+" "+eur(N)+"?",mk(r,[N*p/10,N*(100-p)/100,r+p,N-p],eur),
    p+"% di "+fnum(N)+" = "+fnum(N)+" × "+fnum(p/100)+" = "+fnum(r)+"."];
});

NUM.push(function(){
  var P=pick([400,800,1200,2000]),x=pick([10,20,25,50]),y=pick([10,20,25,40]);
  var f=P*(100+x)*(100-y)/10000;
  return ["num","Un importo di "+eur(P)+" aumenta del "+x+"% e poi diminuisce del "+y+"%. Qual è l'importo finale?",
    mk(f,[P,P*(100+x-y)/100,P*(100-y)/100,P*(100+x)/100-y],eur),
    "Le variazioni percentuali si moltiplicano: "+fnum(P)+" × "+fnum(1+x/100)+" × "+fnum(1-y/100)+" = "+fnum(f)+" €. Non si sommano i due tassi."];
});

NUM.push(function(){
  var d1=pick([10,20,25,30,40,50]),d2=pick([10,20,25,30,40,50]);
  var t=d1+d2-d1*d2/100;
  return ["num","Un prezzo ha uno sconto del "+d1+"% e poi un ulteriore sconto del "+d2+"% sul prezzo già scontato. Qual è lo sconto complessivo?",
    mk(t,[d1+d2,(d1+d2)/2,d1*d2/100,Math.max(d1,d2)],pc),
    "I fattori si moltiplicano: (1 − "+fnum(d1/100)+") × (1 − "+fnum(d2/100)+") = "+fnum((100-t)/100)+", cioè sconto totale del "+fnum(t)+"%."];
});

NUM.push(function(){
  var imp=pick([100,150,200,250,300,350,400,500,600,800,1000,1200]);
  var tot=Math.round(imp*122)/100;
  return ["num","Una fattura comprensiva di IVA al 22% è di "+eur(tot)+". Qual è l'imponibile?",
    mk(imp,[tot*0.78,tot-22,tot/1.2,tot*0.8],eur),
    "L'imponibile si ottiene dividendo per 1,22: "+fnum(tot)+" / 1,22 = "+fnum(imp)+" €. Togliere il 22% dal totale darebbe un valore sbagliato."];
});

NUM.push(function(){
  var a=pick([2,3,4,5,6,8]),b=rnd(3,9),m=rnd(2,9),c=a*m;
  var x=b*m;
  return ["num","Risolvi la proporzione "+a+" : "+b+" = "+c+" : x. Quanto vale x?",
    mk(x,[a*c/b,b+c-a,b*a,x+a],fnum),
    "x = "+b+" × "+c+" / "+a+" = "+fnum(x)+"."];
});

NUM.push(function(){
  var out=null,tries=0;
  while(tries++<200){
    var n1=rnd(2,9),n2=rnd(2,9),a1=rnd(20,34),a2=rnd(20,34);
    if(a1===a2)continue;
    var avg=(n1*a1+n2*a2)/(n1+n2);
    if(Math.abs(avg*10-Math.round(avg*10))>1e-9)continue;
    out=["num","Un gruppo di "+n1+" istruttori ha un'età media di "+a1+" anni, un secondo gruppo di "+n2+" istruttori ha un'età media di "+a2+" anni. Qual è l'età media dei due gruppi insieme?",
      mk(avg,[(a1+a2)/2,a1,a2,avg+1],fnum),
      "Media ponderata: ("+n1+" × "+a1+" + "+n2+" × "+a2+") / "+(n1+n2)+" = "+fnum(avg)+". Non si fa la media semplice delle due medie."];
    break;
  }
  return out;
});

NUM.push(function(){
  var n=pick([4,5,6]),avg=rnd(20,40),vals=[],i,sum=0;
  for(i=0;i<n-1;i++){var v=avg+rnd(-8,8);vals.push(v);sum+=v;}
  var x=n*avg-sum;
  if(x<=0)return null;
  return ["num","La media di "+n+" numeri è "+avg+". Gli ultimi "+(n-1)+" sono "+vals.join(", ")+". Quanto vale il primo?",
    mk(x,[x+1,x-1,avg,x+n],fnum),
    "La somma totale è "+n+" × "+avg+" = "+(n*avg)+". Sottraendo "+sum+" si ottiene "+x+"."];
});

NUM.push(function(){
  // serie numeriche di vario tipo
  var kind=rnd(1,7),s=[],i,q,ans,why;
  if(kind===1){var a=rnd(2,15),d=rnd(3,9);for(i=0;i<6;i++)s.push(a+i*d);ans=s.pop();why="Si aggiunge ogni volta "+d+": "+s[s.length-1]+" + "+d+" = "+ans+".";}
  else if(kind===2){var a2=rnd(1,5),inc=rnd(1,3),dd=rnd(1,3);s.push(a2);for(i=1;i<7;i++){s.push(s[i-1]+dd+(i-1)*inc);}ans=s.pop();
    why="Le differenze crescono di "+inc+" a ogni passo ("+(s[1]-s[0])+", "+(s[2]-s[1])+", "+(s[3]-s[2])+", ...), quindi l'ultimo termine è "+ans+".";}
  else if(kind===3){var a3=rnd(1,4),r=pick([2,3]);for(i=0;i<6;i++)s.push(a3*Math.pow(r,i));ans=s.pop();why="Ogni termine è il precedente moltiplicato per "+r+": "+s[s.length-1]+" × "+r+" = "+ans+".";}
  else if(kind===4){var a4=rnd(10,30),u=rnd(2,6),w=rnd(2,5);s.push(a4);for(i=1;i<7;i++){s.push(i%2?s[i-1]*2:s[i-1]-w);}ans=s.pop();
    why="Si alternano raddoppio e sottrazione di "+w+": l'ultimo termine è "+ans+".";}
  else if(kind===5){var k=rnd(1,4),off=rnd(0,5);for(i=1;i<=6;i++)s.push(i*i+off);ans=s.pop();why="Sono i quadrati dei numeri naturali più "+off+": 6² + "+off+" = "+ans+".";}
  else if(kind===6){var f1=rnd(1,3),f2=rnd(2,5);s=[f1,f2];for(i=2;i<7;i++)s.push(s[i-1]+s[i-2]);ans=s.pop();why="Ogni termine è la somma dei due precedenti: "+s[s.length-2]+" + "+s[s.length-1]+" = "+ans+".";}
  else{var a7=rnd(5,12),d1=rnd(2,5),d2=rnd(2,5);s=[];for(i=0;i<8;i++){s.push(i%2===0?a7+d1*(i/2):(a7+20)-d2*((i-1)/2));}ans=s.pop();
    why="Le posizioni dispari salgono di "+d1+", le pari scendono di "+d2+": il termine mancante è "+ans+".";}
  q="Completa la serie: "+s.join(", ")+", …";
  return ["num",q,mk(ans,[ans+1,ans-1,ans+2,ans-2,ans*2],fnum),why];
});

NUM.push(function(){
  // incontro o inseguimento
  var v1=pick([40,50,60,70,80]),v2=pick([30,40,50,60,70,90]),t=pick([1,1.5,2,2.5,3]);
  if(v1===v2)return null;
  if(Math.random()<0.5){
    var D=t*(v1+v2);
    return ["num","Due treni partono nello stesso momento da due stazioni distanti "+fnum(D)+" km, uno verso l'altro, a "+v1+" km/h e "+v2+" km/h. Dopo quanto tempo si incrociano?",
      mk(t,[D/v1,D/v2,D/Math.abs(v1-v2),t*2],function(x){return fnum(x)+(x===1?" ora":" ore");}),
      "Si avvicinano a "+(v1+v2)+" km/h: "+fnum(D)+" / "+(v1+v2)+" = "+fnum(t)+" ore."];
  }
  var fast=Math.max(v1,v2),slow=Math.min(v1,v2),D2=t*(fast-slow);
  return ["num","Un mezzo a "+fast+" km/h insegue un altro a "+slow+" km/h che ha "+fnum(D2)+" km di vantaggio. Dopo quanto tempo lo raggiunge?",
    mk(t,[D2/fast,D2/slow,D2/(fast+slow),t*2],function(x){return fnum(x)+(x===1?" ora":" ore");}),
    "La distanza si riduce a "+(fast-slow)+" km/h: "+fnum(D2)+" / "+(fast-slow)+" = "+fnum(t)+" ore."];
});

NUM.push(function(){
  var pairs=[[6,3,2],[12,4,3],[10,10,5],[15,10,6],[20,5,4],[12,6,4],[30,20,12],[8,8,4],[9,18,6],[24,12,8],[4,12,3],[18,9,6]];
  var p=pick(pairs),a=p[0],b=p[1],t=p[2];
  return ["num","Un operatore istruisce un lotto di pratiche in "+a+" giorni, un secondo in "+b+" giorni. Lavorando insieme, in quanti giorni lo istruiscono?",
    mk(t,[(a+b)/2,a+b,Math.abs(a-b),Math.min(a,b)],fnum),
    "In un giorno fanno 1/"+a+" + 1/"+b+" = "+fnum(1/a+1/b,3)+" del lavoro, quindi servono 1 / ("+fnum(1/a+1/b,3)+") = "+t+" giorni."];
});

NUM.push(function(){
  var C=pick([1000,2000,2500,5000,8000]),r=pick([2,3,4,5,6]),t=rnd(2,4);
  if(Math.random()<0.5){
    var I=C*r*t/100;
    return ["num","Un capitale di "+eur(C)+" è investito al "+r+"% annuo a interesse semplice per "+t+" anni. Quanto vale l'interesse totale?",
      mk(I,[C*(Math.pow(1+r/100,t)-1),I/t,C*r/100,I+C],eur),
      "Interesse semplice: "+fnum(C)+" × "+fnum(r/100)+" × "+t+" = "+fnum(I)+" €."];
  }
  var M=C*Math.pow(1+r/100,2);
  return ["num","Un capitale di "+eur(C)+" è investito al "+r+"% annuo a interesse composto per 2 anni. Qual è il montante?",
    mk(Math.round(M*100)/100,[C*(1+2*r/100),C*(1+r/100),C+C*r/100*3,C*Math.pow(1+r/100,3)],function(x){return fnum(x,Math.abs(x*100-Math.round(x*100))<1e-6&&Math.abs(x-Math.round(x))>1e-9?2:0)+" €";}),
    "Montante composto: "+fnum(C)+" × "+fnum(1+r/100,2)+"² = "+fnum(Math.round(M*100)/100)+" €. Con l'interesse semplice si avrebbe "+fnum(C*(1+2*r/100))+" €."];
});

NUM.push(function(){
  var out=null,tries=0;
  while(tries++<100){
    var A=rnd(15,45),B=rnd(15,45),both=rnd(3,Math.min(A,B)-2),none=rnd(2,12),N=A+B-both+none;
    out=["num","In un gruppo di "+N+" candidati, "+A+" conoscono l'inglese, "+B+" il francese e "+none+" nessuna delle due lingue. Quanti conoscono entrambe le lingue?",
      mk(both,[A+B-N,A+B,N-A-B+none,both+1],fnum),
      "Chi conosce almeno una lingua è "+N+" − "+none+" = "+(N-none)+". Entrambe: "+A+" + "+B+" − "+(N-none)+" = "+both+"."];
    break;
  }
  return out;
});

NUM.push(function(){
  var start=rnd(0,6),n=rnd(20,200),ans=(start+n)%7;
  var wrong=[(ans+1)%7,(ans+6)%7,(ans+2)%7].map(function(i){return i;});
  var opts=[GIORNI[ans]];
  wrong.forEach(function(i){if(opts.indexOf(GIORNI[i])<0)opts.push(GIORNI[i]);});
  var k=3;while(opts.length<4){var g=GIORNI[(ans+k++)%7];if(opts.indexOf(g)<0)opts.push(g);}
  return ["num","Se oggi è "+GIORNI[start]+", che giorno della settimana sarà fra "+n+" giorni?",opts.slice(0,4),
    n+" = "+Math.floor(n/7)+" × 7 + "+(n%7)+". Le settimane intere non cambiano il giorno: si avanza di "+(n%7)+" giorni da "+GIORNI[start]+", cioè "+GIORNI[ans]+"."];
});

NUM.push(function(){
  var H=rnd(1,11),M=pick([0,10,20,30,40,50]);
  var a=Math.abs(30*H-5.5*M);if(a>180)a=360-a;
  return ["num","Qual è l'angolo minore tra le lancette dell'orologio alle "+H+":"+(M<10?"0"+M:M)+"?",
    mk(a,[360-a,Math.abs(30*H-6*M),a+30,Math.abs(30*H-5*M)],function(x){return fnum(x)+"°";}),
    "Angolo = |30 × "+H+" − 5,5 × "+M+"| = "+fnum(Math.abs(30*H-5.5*M))+"°"+(Math.abs(30*H-5.5*M)>180?", da cui 360 − quel valore = "+fnum(a)+"°":"")+"."];
});

NUM.push(function(){
  var AL="ABCDEFGHILMNOPQRSTUVZ".split("");
  var start=rnd(0,5),step=rnd(2,4),growing=Math.random()<0.4,pos=[start],i,cur=start,st=step;
  for(i=1;i<6;i++){cur+=st;if(growing)st+=1;pos.push(cur);}
  if(pos[5]>20)return null;
  var shown=pos.slice(0,5).map(function(p){return AL[p];}),ans=AL[pos[5]];
  var wrongs=[],w;
  var A26="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  w=A26[pos[5]];if(w!==ans&&AL.indexOf(w)>=0)wrongs.push(w);   // trappola: alfabeto di 26 lettere
  [pos[5]-1,pos[5]+1,pos[5]+2,pos[5]-2].forEach(function(p){if(p>=0&&p<=20&&AL[p]!==ans&&wrongs.indexOf(AL[p])<0)wrongs.push(AL[p]);});
  var opts=[ans];wrongs.forEach(function(x){if(opts.indexOf(x)<0&&opts.length<4)opts.push(x);});
  if(opts.length<4)return null;
  return ["num","Completa la serie di lettere dell'alfabeto italiano (21 lettere, senza J, K, W, X, Y): "+shown.join(", ")+", …",opts,
    "Posizioni nell'alfabeto italiano: "+pos.slice(0,6).map(function(p){return p+1;}).join(", ")+". "+(growing?"Il salto cresce di 1 a ogni passo.":"Il salto è costante e vale "+step+".")+" La lettera mancante è "+ans+"."];
});

NUM.push(function(){
  var kind=rnd(1,2),n,r;
  if(kind===1){n=rnd(4,6);r=1;for(var i=2;i<=n;i++)r*=i;
    return ["num","In quanti modi diversi si possono ordinare "+n+" pratiche distinte?",mk(r,[n*n,n*(n-1),r/2,r*2],fnum),n+"! = "+fnum(r)+"."];}
  n=rnd(5,9);var k=rnd(2,3);r=k===2?n*(n-1)/2:n*(n-1)*(n-2)/6;
  return ["num","Quanti gruppi diversi di "+k+" persone si possono formare scegliendole fra "+n+"?",mk(r,[n*k,k===2?n*(n-1):n*(n-1)*(n-2),Math.pow(n,k),r+n],fnum),
    "Combinazioni: "+(k===2?n+" × "+(n-1)+" / 2":n+" × "+(n-1)+" × "+(n-2)+" / 6")+" = "+fnum(r)+". L'ordine non conta."];
});

NUM.push(function(){
  var a=pick([2,3,4,5]),b=pick([3,5,7]),c=pick([2,3,4]),k=pick([10,20,30,40]);
  if(a===b||a===c||b===c)return null;
  var tot=k*(a+b+c),big=k*Math.max(a,b,c);
  return ["num","Un budget di "+eur(tot)+" è ripartito in parti proporzionali a "+a+", "+b+" e "+c+". Qual è la quota più grande?",
    mk(big,[tot/3,k*Math.min(a,b,c),tot/Math.max(a,b,c),big+k],eur),
    "Le parti sono "+(a+b+c)+", ognuna vale "+fnum(tot)+" / "+(a+b+c)+" = "+fnum(k)+" €. La quota maggiore è "+Math.max(a,b,c)+" × "+fnum(k)+" = "+fnum(big)+" €."];
});

NUM.push(function(){
  var orig=pick([20,40,60,80,100,120,200,240,400]),p=pick([10,20,25,50]);
  var fin=orig*(100+p)/100;
  return ["num","Dopo un aumento del "+p+"% un importo vale "+eur(fin)+". Quanto valeva prima dell'aumento?",
    mk(orig,[fin-fin*p/100,fin-p,fin/(1+p/50),fin*(100-p)/100],eur),
    "Il valore finale è il "+(100+p)+"% dell'originale: "+fnum(fin)+" / "+fnum(1+p/100)+" = "+fnum(orig)+" €."];
});

NUM.push(function(){
  var v=pick([36,54,72,90,108,126,144]),ms=v/3.6;
  return ["num","Un mezzo viaggia a "+v+" km/h. Quanti metri percorre in un secondo?",mk(ms,[v/36,v/3,v*3.6,v/6],function(x){return fnum(x)+" m";}),
    "Per passare da km/h a m/s si divide per 3,6: "+v+" / 3,6 = "+fnum(ms)+" m/s."];
});

NUM.push(function(){
  var r=rnd(1,7),b=rnd(2,8);
  if(r===b)return null;
  function g(a,c){while(c){var t=a%c;a=c;c=t;}return a;}
  function frac(n,d){var k=g(n,d);return (n/k)+"/"+(d/k);}
  var tot=r+b;
  var out=[frac(r,tot),frac(b,tot),frac(r,b),frac(r+1,tot)];
  var uniq=[];out.forEach(function(x){if(uniq.indexOf(x)<0)uniq.push(x);});
  if(uniq.length<4)return null;
  return ["num","Un'urna contiene "+r+" pratiche rosse e "+b+" blu. Se ne estrae una a caso, qual è la probabilità che sia rossa?",uniq,
    "Casi favorevoli / casi possibili = "+r+" / "+tot+" = "+frac(r,tot)+"."];
});

NUM.push(function(){
  var rows=[],names=["A","B","C"],i,tot=0,doms=0;
  var n1=pick([100,150,200,250,300]),n2=pick([100,150,200,250,300]);
  var p1=pick([30,40,50,60,70,80]),p2=pick([30,40,50,60,70,80]);
  var a1=n1*p1/100,a2=n2*p2/100;
  if(Math.random()<0.5){
    return ["num","L'avviso A ha ricevuto "+n1+" domande con il "+p1+"% ammesso. L'avviso B ne ha ricevute "+n2+" con il "+p2+"% ammesso. Quante domande ammesse in tutto?",
      mk(a1+a2,[(p1+p2)/2*(n1+n2)/100,a1,a2,n1+n2-a1-a2],fnum),
      "Ammesse A: "+fnum(n1)+" × "+fnum(p1/100)+" = "+fnum(a1)+". Ammesse B: "+fnum(n2)+" × "+fnum(p2/100)+" = "+fnum(a2)+". Totale "+fnum(a1+a2)+"."];
  }
  var rate=(a1+a2)/(n1+n2)*100;
  if(Math.abs(rate*10-Math.round(rate*10))>1e-9)return null;
  return ["num","L'avviso A ha ricevuto "+n1+" domande con il "+p1+"% ammesso. L'avviso B ne ha ricevute "+n2+" con il "+p2+"% ammesso. Qual è la percentuale complessiva di domande ammesse?",
    mk(rate,[(p1+p2)/2,p1,p2,rate+5],pc),
    "Ammesse in totale: "+fnum(a1)+" + "+fnum(a2)+" = "+fnum(a1+a2)+" su "+fnum(n1+n2)+" domande: "+fnum(rate)+"%. Non si fa la media semplice delle percentuali, se le basi sono diverse."];
});

NUM.push(function(){
  var y=pick([2026,2027,2028]),m=rnd(0,10),d=rnd(1,28);
  var a=utc(y,m,d),n=rnd(20,200),b=addDays(a,n);
  return ["num","Quanti giorni passano dal "+dstr(a)+" al "+dstr(b)+"?",
    mk(n,[n+1,n-1,n+7,Math.round(n/30)*30],fnum),
    "Si contano i giorni di calendario tra le due date: "+n+"."];
});

/* ───────── DEDUTTIVA ───────── */
var DED=[];
var NOUNS=[
 {pl:"bandi",plA:"i bandi",sg:"un bando"},{pl:"avvisi",plA:"gli avvisi",sg:"un avviso"},
 {pl:"fascicoli",plA:"i fascicoli",sg:"un fascicolo"},{pl:"decreti",plA:"i decreti",sg:"un decreto"},
 {pl:"progetti",plA:"i progetti",sg:"un progetto"},{pl:"verbali",plA:"i verbali",sg:"un verbale"},
 {pl:"rendiconti",plA:"i rendiconti",sg:"un rendiconto"},{pl:"allegati",plA:"gli allegati",sg:"un allegato"},
 {pl:"pagamenti",plA:"i pagamenti",sg:"un pagamento"},{pl:"controlli",plA:"i controlli",sg:"un controllo"}
];
function part(plA){return plA.replace(/^i /,"dei ").replace(/^gli /,"degli ");}
function tutti(X,Y){return "Tutti "+X.plA+" sono "+Y.pl+".";}
function alcuni(X,Y){return "Alcuni "+X.pl+" sono "+Y.pl+".";}
function alcuniNo(X,Y){return "Alcuni "+X.pl+" non sono "+Y.pl+".";}
function nessuno(X,Y){return "Nessuno "+part(X.plA)+" è "+Y.sg+".";}

DED.push(function(){
  var t=shuf(NOUNS).slice(0,3),X=t[0],Y=t[1],Z=t[2],form=rnd(1,4),p1,p2,ok,wr,why;
  if(form===1){p1=tutti(X,Y);p2=tutti(Y,Z);ok=tutti(X,Z);wr=[tutti(Z,X),nessuno(X,Z),alcuniNo(Z,X)];why="Se tutti "+X.plA+" sono "+Y.pl+" e tutti "+Y.plA+" sono "+Z.pl+", allora tutti "+X.plA+" sono "+Z.pl+". L'inversa non segue.";}
  else if(form===2){p1=nessuno(Y,Z);p2=tutti(X,Y);ok=nessuno(X,Z);wr=[tutti(X,Z),alcuni(X,Z),tutti(Z,Y)];why="Tutti "+X.plA+" ricadono tra "+Y.plA+", e "+nessuno(Y,Z).charAt(0).toLowerCase()+nessuno(Y,Z).slice(1,-1)+": lo stesso vale quindi per "+X.plA+".";}
  else if(form===3){p1=alcuni(X,Y);p2=tutti(Y,Z);ok=alcuni(X,Z);wr=[tutti(X,Z),nessuno(X,Z),tutti(Z,X)];why="Alcuni "+X.pl+" sono "+Y.pl+", e tutti "+Y.plA+" sono "+Z.pl+": quindi alcuni "+X.pl+" sono "+Z.pl+". Non si può dire di più.";}
  else{p1=tutti(X,Y);p2=alcuniNo(Z,Y);ok=alcuniNo(Z,X);wr=[tutti(Z,X),nessuno(Z,X),alcuni(Z,X)];why="Alcuni "+Z.pl+" non sono "+Y.pl+", mentre tutti "+X.plA+" sono "+Y.pl+": quei "+Z.pl+" non possono essere "+X.pl+", quindi alcuni "+Z.pl+" non sono "+X.pl+".";}
  return ["ded","Assumi vere le premesse. 1) "+p1+" 2) "+p2+" Quale conclusione segue necessariamente?",[ok].concat(wr),why];
});

var COND=[
 ["la domanda è completa","la domanda non è completa","viene avviata l'istruttoria","non viene avviata l'istruttoria"],
 ["il beneficiario ha rendicontato","il beneficiario non ha rendicontato","viene erogato il saldo","non viene erogato il saldo"],
 ["il DURC è regolare","il DURC non è regolare","il pagamento può essere disposto","il pagamento non può essere disposto"],
 ["la spesa è tracciabile","la spesa non è tracciabile","la spesa è ammissibile","la spesa non è ammissibile"],
 ["l'impresa supera il massimale de minimis","l'impresa non supera il massimale de minimis","l'aiuto non può essere concesso in de minimis","l'aiuto può essere concesso in de minimis"],
 ["il termine è scaduto","il termine non è scaduto","la domanda è irricevibile","la domanda non è irricevibile"]
];
DED.push(function(){
  var c=pick(COND),P=c[0],nP=c[1],Q=c[2],nQ=c[3],form=rnd(1,4),prem,ok,wr,why;
  var nothing="Non si può concludere nulla di certo";
  if(form===1){prem="Se "+P+", allora "+Q+". Si sa che "+P+".";ok=cap(Q);wr=[cap(nQ),cap(nP),nothing];why="Modus ponens: se P allora Q, ed è vero P, quindi Q.";}
  else if(form===2){prem="Se "+P+", allora "+Q+". Si sa che "+nQ+".";ok=cap(nP);wr=[cap(P),cap(Q),nothing];why="Modus tollens: se P allora Q, ma Q non c'è, quindi non P (contrapposizione).";}
  else if(form===3){prem="Se "+P+", allora "+Q+". Si sa che "+Q+".";ok="Non si pu\u00f2 stabilire se "+P;wr=[cap(P),cap(nP),cap(nQ)];why="Affermare il conseguente è una fallacia: Q può verificarsi anche per altre ragioni, quindi non si può dire se P sia vero.";}
  else{prem="Se "+P+", allora "+Q+". Si sa che "+nP+".";ok="Non si pu\u00f2 stabilire se "+Q;wr=[cap(Q),cap(nQ),cap(P)];why="Negare l'antecedente è una fallacia: Q può verificarsi anche senza P, quindi non si può dire se Q sia vero.";}
  return ["ded",prem+" Che cosa si può concludere?",[ok].concat(wr),why];
});

var NEG=[
 {all:"Tutte le domande sono state istruite",neg:"Almeno una domanda non è stata istruita",none:"Nessuna domanda è stata istruita",some:"Almeno una domanda è stata istruita",one:"Una sola domanda è stata istruita",most:"La maggior parte delle domande non è stata istruita"},
 {all:"Tutti i beneficiari hanno rendicontato",neg:"Almeno un beneficiario non ha rendicontato",none:"Nessun beneficiario ha rendicontato",some:"Almeno un beneficiario ha rendicontato",one:"Un solo beneficiario ha rendicontato",most:"La maggior parte dei beneficiari non ha rendicontato"},
 {all:"Tutte le fatture sono state pagate con bonifico",neg:"Almeno una fattura non è stata pagata con bonifico",none:"Nessuna fattura è stata pagata con bonifico",some:"Almeno una fattura è stata pagata con bonifico",one:"Una sola fattura è stata pagata con bonifico",most:"La maggior parte delle fatture non è stata pagata con bonifico"},
 {all:"Tutte le imprese ammesse sono PMI",neg:"Almeno un'impresa ammessa non è una PMI",none:"Nessuna impresa ammessa è una PMI",some:"Almeno un'impresa ammessa è una PMI",one:"Una sola impresa ammessa è una PMI",most:"La maggior parte delle imprese ammesse non è una PMI"},
 {all:"Tutti i verbali sono firmati",neg:"Almeno un verbale non è firmato",none:"Nessun verbale è firmato",some:"Almeno un verbale è firmato",one:"Un solo verbale è firmato",most:"La maggior parte dei verbali non è firmata"}
];
DED.push(function(){
  var it=pick(NEG),k=rnd(1,3),src,ok,wr,why;
  if(k===1){src=it.all;ok=it.neg;wr=[it.none,it.most,it.some];why="Per negare «tutti» basta un controesempio: almeno uno non rispetta la condizione. «Nessuno» è una negazione troppo forte.";}
  else if(k===2){src=it.none;ok=it.some;wr=[it.all,it.neg,it.one];why="Per negare «nessuno» basta un caso positivo: almeno uno la rispetta. «Tutti» è troppo forte.";}
  else{src=it.some;ok=it.none;wr=[it.all,it.neg,it.one];why="La negazione di «almeno uno» è «nessuno».";}
  return ["ded","Qual è la negazione dell'affermazione: «"+src+"»?",[ok].concat(wr),why];
});

var NAMES=["Anna","Bruno","Carla","Davide","Elena","Fabio","Giulia","Marco","Sara","Luca"];
DED.push(function(){
  var n=rnd(4,5),chain=shuf(NAMES).slice(0,n),st=[],i;
  for(i=0;i<n-1;i++)st.push(chain[i]+" ha concluso la pratica prima di "+chain[i+1]+".");
  var posName=["per primo","per secondo","per terzo","per quarto","per quinto"];
  var idx=pick([0,1,2,n-1]);
  var label=idx===n-1?"per ultimo":posName[idx];
  var opts=[chain[idx]];shuf(chain).forEach(function(x){if(opts.length<4&&opts.indexOf(x)<0)opts.push(x);});
  return ["ded",shuf(st).join(" ")+" Chi ha concluso la pratica "+label+"?",opts,"L'ordine è "+chain.join(", ")+". "+cap(label)+" è "+chain[idx]+"."];
});

/* ───────── CALCOLI TECNICI ───────── */
var CAL=[];

CAL.push(function(){
  // de minimis residuo con finestra mobile
  var conc=utc(rnd(2027,2028),rnd(0,11),rnd(5,25));
  var start=utc(conc.getUTCFullYear()-3,conc.getUTCMonth(),conc.getUTCDate());
  var n=3,arr=[],i,inSum=0,allSum=0,dsel=[];
  var offs=shuf([-30,-5,40,90,200,400,700,900,1100,1300,1500]).slice(0,n);
  // anchors in giorni dalla data di concessione, negativi = nel passato
  var days=[];
  for(i=0;i<n;i++){days.push(-pick([60,150,300,500,700,900,1050,1150,1250,1400]));}
  days=days.filter(function(d,ix){return days.indexOf(d)===ix;});
  if(days.length<n)return null;
  var amts=[];for(i=0;i<days.length;i++)amts.push(pick([20,30,40,50,60,70,80,90,100])*1000);
  var rows=[];
  for(i=0;i<days.length;i++){
    var d=addDays(conc,days[i]),inside=d>=start;
    allSum+=amts[i];if(inside)inSum+=amts[i];
    rows.push({d:d,a:amts[i],inside:inside});
  }
  // evita casi limite troppo vicini al bordo
  for(i=0;i<rows.length;i++){if(Math.abs((rows[i].d-start)/86400000)<20)return null;}
  var anyOut=rows.some(function(r){return !r.inside;});
  if(!anyOut)return null;
  if(inSum>=300000)return null;
  rows.sort(function(a,b){return a.d-b.d;});
  var head=300000-inSum;
  var insRows=rows.filter(function(r){return r.inside;});
  if(!insRows.length)return null;
  var list=rows.map(function(r){return eur(r.a)+" il "+dstr(r.d);}).join("; ");
  return ["cal","Un'impresa ha ricevuto aiuti de minimis di: "+list+". Si vuole concedere un nuovo aiuto il "+dstr(conc)+". Qual è il massimo importo concedibile in de minimis?",
    mk(head,[300000-allSum>0?300000-allSum:head+10000,300000,inSum,head+insRows[0].a],eur),
    "La finestra mobile va dal "+dstr(start)+" al "+dstr(conc)+". Rientrano "+eur(inSum)+": 300.000 − "+fnum(inSum)+" = "+fnum(head)+" €. Gli aiuti più vecchi non si contano."];
});

CAL.push(function(){
  var D=pick([80000,100000,120000,150000,200000,250000]),P=pick([30000,40000,50000,60000,70000,90000]);
  if(P>=D)return null;
  var kind=rnd(1,3),r,q,why;
  if(kind===1){r=D*0.07;q="Costi diretti ammissibili: "+eur(D)+". Applicando il tasso forfettario del 7% senza calcolo giustificato, quanto sono i costi indiretti?";why="7% dei costi diretti ammissibili: "+fnum(D)+" × 0,07 = "+fnum(r)+" €.";return ["cal",q,mk(r,[P*0.15,D*0.15,D*0.25,P*0.07],eur),why];}
  if(kind===2){r=P*0.15;q="Costi diretti di personale: "+eur(P)+", costi diretti totali: "+eur(D)+". Applicando il tasso forfettario del 15% sui costi di personale, quanto sono i costi indiretti?";why="15% dei costi diretti di personale: "+fnum(P)+" × 0,15 = "+fnum(r)+" €.";return ["cal",q,mk(r,[D*0.15,D*0.07,P*0.07,P*0.25],eur),why];}
  r=P*0.40;q="Costi diretti di personale: "+eur(P)+". Applicando il tasso massimo del 40% previsto dall'art. 56 del RDC per coprire i restanti costi ammissibili, a quanto ammontano questi altri costi?";why="40% dei costi diretti di personale: "+fnum(P)+" × 0,40 = "+fnum(r)+" €.";
  return ["cal",q,mk(r,[P*0.15,P*0.25,D*0.40,P*0.07],eur),why];
});

CAL.push(function(){
  var rate=rnd(14,36),annual=rate*1720,hours=pick([40,80,120,160,200,250,300,400]);
  if(Math.random()<0.5){
    return ["cal","Il costo annuo lordo documentato di un dipendente a tempo pieno è "+eur(annual)+". Qual è il costo orario standard (art. 55 RDC)?",
      mk(rate,[annual/1800,annual/1600,annual/2080,annual/1720*1.1],function(x){return fnum(x,Math.abs(x-Math.round(x))<1e-9?0:2)+" €";}),
      fnum(annual)+" / 1.720 ore = "+fnum(rate)+" € l'ora."];
  }
  return ["cal","Costo orario standard: "+eur(rate)+". Un dipendente lavora "+hours+" ore sull'operazione. Quanto vale il costo del personale ammesso?",
    mk(rate*hours,[rate*hours*1.15,rate*hours/2,rate*(hours+10),annual],eur),
    fnum(rate)+" × "+fnum(hours)+" = "+fnum(rate*hours)+" €."];
});

CAL.push(function(){
  var S=pick([60000,80000,100000,120000,150000,200000]),E=pick([0,4000,8000,12000,20000,30000]),i=pick([40,50,60,70,80]);
  var ad=S-E,contr=ad*i/100,adv=pick([0.2,0.3,0.4,0.5])*(S*i/100);
  adv=Math.round(adv/1000)*1000;
  var bal=contr-adv;
  var f=function(x){return x>=0?"Saldo da erogare: "+eur(x):"Da recuperare: "+eur(-x);};
  var wrong=[(S*i/100)-adv,contr,ad-adv,contr+adv];
  var correctStr=f(bal);
  var opts=[correctStr];
  wrong.forEach(function(w){var s=f(w);if(opts.indexOf(s)<0&&opts.length<4)opts.push(s);});
  var k=1;while(opts.length<4){var s2=f(bal+1000*k);if(opts.indexOf(s2)<0)opts.push(s2);k++;}
  return ["cal","Spese rendicontate "+eur(S)+", spese non ammesse in sede di controllo "+eur(E)+", intensità del contributo "+i+"%, anticipo già erogato "+eur(adv)+". Qual è l'esito finale?",opts,
    "Spesa ammessa: "+fnum(S)+" − "+fnum(E)+" = "+fnum(ad)+". Contributo: "+fnum(ad)+" × "+fnum(i/100)+" = "+fnum(contr)+". Meno l'anticipo di "+fnum(adv)+": "+(bal>=0?"saldo di "+fnum(bal)+" €.":"da recuperare "+fnum(-bal)+" €.")];
});

CAL.push(function(){
  var T=pick([500000,800000,1000000,1200000,2500000,4000000]),rate=pick([40,40,40,50,60,70,85]),which=rnd(1,2);
  var ue=T*rate/100,naz=T-ue;
  var ctx=rate===40?"Nel PR FESR Lazio il cofinanziamento UE è il 40%.":"In un programma il tasso di cofinanziamento UE è il "+rate+"%.";
  if(which===1)return ["cal",ctx+" Su una spesa ammissibile di "+eur(T)+", qual è la quota UE?",mk(ue,[naz,T*0.4,T*rate/10,ue+T*0.1],eur),fnum(T)+" × "+fnum(rate/100)+" = "+fnum(ue)+" €."];
  return ["cal",ctx+" Su una spesa ammissibile di "+eur(T)+", qual è la quota nazionale e regionale?",mk(naz,[ue,T*0.6,T*(100-rate)/10,naz+T*0.1],eur),fnum(T)+" × "+fnum((100-rate)/100)+" = "+fnum(naz)+" €."];
});

CAL.push(function(){
  var y=rnd(2027,2028),m=rnd(0,10),d=rnd(1,28),days=pick([30,30,60,80,90,120,180]);
  var a=utc(y,m,d),b=addDays(a,days);
  var what=days===80?"Il pagamento al beneficiario va disposto entro 80 giorni dalla domanda":days===30?"Il procedimento deve concludersi entro 30 giorni":"Il termine è di "+days+" giorni";
  var mon=utc(y,m+Math.round(days/30),d);
  var opts=[dstr(b),dstr(addDays(b,1)),dstr(addDays(b,-1)),dstr(mon)];
  var u=[];opts.forEach(function(x){if(u.indexOf(x)<0)u.push(x);});
  var k=2;while(u.length<4){var z=dstr(addDays(b,k++));if(u.indexOf(z)<0)u.push(z);}
  return ["cal","La domanda è ricevuta il "+dstr(a)+". "+what+" (giorni di calendario). Quando scade il termine?",u,
    dstr(a)+" + "+days+" giorni = "+dstr(b)+". Non si conta «più o meno un mese»: si contano i giorni."];
});

CAL.push(function(){
  var mode=rnd(1,3),imp=pick([500,1000,2000,2500,4000,5000,8000,10000]),rate=pick([22,22,22,10,4]);
  var iva=imp*rate/100,tot=imp+iva;
  if(mode===1)return ["cal","Una fornitura ha imponibile "+eur(imp)+" e IVA al "+rate+"%. Qual è il totale fattura?",mk(tot,[imp-iva,imp*(1+rate/10),imp+rate,iva],eur),fnum(imp)+" × "+fnum(1+rate/100)+" = "+fnum(tot)+" €."];
  if(mode===2)return ["cal","Una fattura ha totale "+eur(tot)+" con IVA al "+rate+". Quanto è l'IVA?",mk(iva,[tot*rate/100,tot-imp-iva,imp,tot/ (rate)],eur),"Imponibile = "+fnum(tot)+" / "+fnum(1+rate/100)+" = "+fnum(imp)+" €. IVA = "+fnum(tot)+" − "+fnum(imp)+" = "+fnum(iva)+" €."];
  return ["cal","Un beneficiario recupera l'IVA. Una spesa ha imponibile "+eur(imp)+" e IVA al "+rate+"%. Quale importo è ammissibile?",mk(imp,[tot,iva,tot-iva/2],eur),"L'IVA recuperabile non è ammissibile: si rendiconta solo l'imponibile, "+fnum(imp)+" €."];
});

CAL.push(function(){
  var y=rnd(2021,2026),f=y+3;
  return ["cal","Un impegno di bilancio del programma è assunto nell'anno "+y+". Entro quale data si applica la regola N+3?",
    ["31 dicembre "+f,"31 dicembre "+(f-1),"31 dicembre "+(f+1),"30 giugno "+f],
    "Il disimpegno scatta se non c'è domanda di pagamento entro il 31 dicembre del terzo anno successivo all'impegno: "+y+" + 3 = "+f+"."];
});

CAL.push(function(){
  var cost=pick([90000,150000,185000,199000,200000,240000,300000,450000]),aid=Math.random()<0.5;
  var must=cost<=200000&&!aid;
  var correct=must?"S\u00ec, il contributo deve essere dato in forma di opzioni semplificate":"No, l'obbligo non si applica: si pu\u00f2 rimborsare a costi reali";
  var wrong=must?["No, l'obbligo non si applica: si pu\u00f2 rimborsare a costi reali","S\u00ec, ma solo con tasso forfettario del 7%","Dipende solo dalla decisione del beneficiario"]:["S\u00ec, il contributo deve essere dato in forma di opzioni semplificate","S\u00ec, ma solo con somme forfettarie","L'obbligo si applica a tutte le operazioni sopra 100.000 \u20ac"];
  var why=cost>200000?"L'obbligo vale solo se il costo totale non supera 200.000 \u20ac: qui \u00e8 superiore."
    :(aid?"Se il sostegno costituisce un aiuto di Stato l'art. 53, par. 2, esclude l'obbligo.":"Fino a 200.000 \u20ac di costo totale, per operazioni che non sono aiuti di Stato, il contributo \u00e8 in forma di SCO.");
  return ["cal","Un'operazione ha un costo totale di "+eur(cost)+(aid?" e il sostegno costituisce un aiuto di Stato a un'impresa":" e il sostegno non costituisce un aiuto di Stato")+". Secondo l'art. 53, par. 2, del RDC, le opzioni semplificate sono obbligatorie?",[correct].concat(wrong),why];
});

CAL.push(function(){
  var cost=pick([100000,150000,200000,250000,300000,400000,500000]),type=rnd(1,2),size=rnd(1,3);
  var base=type===1?50:25,bonus=size===1?20:size===2?10:0,i=base+bonus,aid=cost*i/100;
  var sz=["piccola impresa","media impresa","grande impresa"][size-1],tp=type===1?"ricerca industriale":"sviluppo sperimentale";
  return ["cal","Una "+sz+" realizza un progetto di "+tp+" con costi ammissibili di "+eur(cost)+". Qual è l'aiuto massimo ottenibile in esenzione GBER (art. 25), senza altre maggiorazioni?",
    mk(aid,[cost*base/100,cost*(base+30)/100,cost*(type===1?25:50)/100,cost*(base+bonus/2)/100],eur),
    "Base del "+base+"% per "+tp+", maggiorazione di "+bonus+" punti per la "+sz+": "+i+"% di "+fnum(cost)+" = "+fnum(aid)+" €."];
});

CAL.push(function(){
  var spesa=pick([5,8,10,12,20,25,40])*1000000,err=pick([0.5,1,1.5,1.8,2,2.5,3,4]);
  var e=spesa*err/100;
  var below=err<2,rate=err;
  var cs=pc(rate)+": sotto la soglia di rilevanza del 2%",cs2=pc(rate)+": sopra la soglia di rilevanza del 2%";
  var correct=err<2?cs:err>2?cs2:pc(rate)+": esattamente sulla soglia del 2%, ancora accettabile";
  var wrongs=[
    err<2?cs2:cs,
    pc(rate*10)+": sopra la soglia di rilevanza del 2%",
    pc(rate/10)+": sotto la soglia di rilevanza del 2%"
  ];
  var opts=[correct];wrongs.forEach(function(w){if(opts.indexOf(w)<0&&opts.length<4)opts.push(w);});
  if(opts.length<4)return null;
  return ["cal","Spesa nei conti: "+eur(spesa)+". Errore proiettato accertato dall'audit: "+eur(e)+". Qual è il tasso di errore e come si colloca rispetto alla soglia?",opts,
    fnum(e)+" / "+fnum(spesa)+" = "+fnum(rate)+"%. La soglia di rilevanza è il 2%."];
});

CAL.push(function(){
  var dot=pick([2,3,4,5,6,8,10,12])*1000000,avg=pick([40,50,80,100,120,150,200,250])*1000;
  var n=Math.floor(dot/avg);
  return ["cal","Un avviso ha una dotazione di "+eur(dot)+" e finanzia progetti con un contributo medio di "+eur(avg)+". Quanti progetti si possono finanziare?",
    mk(n,[n+1,n-1,Math.round(n/2),n*2],fnum),fnum(dot)+" / "+fnum(avg)+" = "+fnum(dot/avg)+(n!==dot/avg?", cioè "+n+" interi":"")+"."];
});

CAL.push(function(){
  // due imprese collegate (impresa unica)
  var a=pick([40,60,80,100,120,150])*1000,b=pick([30,50,70,90,110])*1000,p=pick([51,60,75,100]);
  var head=300000-a-b;
  if(head<=0)return null;
  return ["cal","L'impresa Alfa detiene il "+p+"% del capitale di Beta e ne controlla la maggioranza dei diritti di voto. Nella finestra triennale Alfa ha ricevuto "+eur(a)+" di de minimis e Beta "+eur(b)+". Quanto si può ancora concedere a Beta?",
    mk(head,[300000-b,300000-a,300000,head+a],eur),
    "Alfa e Beta sono un'impresa unica: gli aiuti si sommano. 300.000 − "+fnum(a)+" − "+fnum(b)+" = "+fnum(head)+" €."];
});

/* ───────── INTERFACCIA ───────── */
var counter=0;
function make(fns,topicOverride){
  for(var tries=0;tries<60;tries++){
    var f=pick(fns),r;
    try{r=f();}catch(e){r=null;}
    if(!r)continue;
    var o=r[2];
    if(!o||o.length!==4)continue;
    var bad=false,seen={};
    o.forEach(function(s){if(typeof s!=="string"||!s||/NaN|undefined|Infinity/.test(s)||seen[s])bad=true;seen[s]=1;});
    if(/NaN|undefined|Infinity/.test(r[1]+r[3]))bad=true;
    if(bad)continue;
    counter++;
    return {id:"g"+counter+"_"+Math.random().toString(36).slice(2,6),t:topicOverride||r[0],q:r[1],o:o,e:r[3],gen:true};
  }
  return null;
}
/* kind: "num" | "ded" | "logic" (num + ded) | "cal". Restituisce n quesiti con testo distinto. */
function batch(kind,n){
  var out=[],texts={},guard=0;
  while(out.length<n&&guard++<n*40){
    var pool=kind==="num"?NUM:kind==="ded"?DED:kind==="cal"?CAL:(Math.random()<0.75?NUM:DED);
    var q=make(pool);
    if(!q||texts[q.q])continue;
    texts[q.q]=1;out.push(q);
  }
  return out;
}
window.GEN={batch:batch,NUM:NUM,DED:DED,CAL:CAL,make:make};
})();
