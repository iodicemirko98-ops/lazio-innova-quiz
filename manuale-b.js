/* Manuale di studio, parte B: ciclo di vita di un avviso, spese, aiuti di Stato, costi semplificati, controlli. */
window.MANUALE = (window.MANUALE || []).concat([

{id:"ciclo", t:"6. Il ciclo di vita di un avviso", topics:["ctl","fesr"], html:`
<p class="lead">Il lavoro dell'operatore junior si svolge lungo questa catena. A ogni passaggio corrisponde un controllo e un tipico errore.</p>

<table class="table">
<thead><tr><th>Fase</th><th>Che cosa si fa</th><th>Controllo o rischio tipico</th></tr></thead>
<tbody>
<tr><td>1. Programmazione</td><td>La Regione decide quali azioni attivare. I criteri di selezione sono approvati dal Comitato di sorveglianza.</td><td>Coerenza con obiettivo specifico, condizioni abilitanti, DNSH.</td></tr>
<tr><td>2. Avviso</td><td>Pubblicazione di finalità, dotazione, beneficiari, spese ammissibili, forma e intensità dell'aiuto, termini, criteri di valutazione, cause di esclusione e revoca, responsabile del procedimento, informativa privacy.</td><td>Criteri predeterminati (art. 12 L. 241/1990), base giuridica dell'aiuto (de minimis, GBER, notifica), regole di pubblicità.</td></tr>
<tr><td>3. Presentazione</td><td>Domanda su piattaforma (GeCoWEB Plus), firma digitale, allegati, dichiarazioni sostitutive.</td><td>Rispetto dei termini, completezza, rappresentante legale.</td></tr>
<tr><td>4. Istruttoria formale</td><td>Ricevibilità e ammissibilità: requisiti soggettivi, documenti, dichiarazioni.</td><td>Dimensione PMI, regolarità contributiva (DURC, validità 120 giorni), antimafia, casellario, impresa in difficoltà, Deggendorf, de minimis residuo.</td></tr>
<tr><td>5. Valutazione di merito</td><td>Punteggi sui criteri, da parte di nucleo o commissione. Graduatoria o procedura a sportello.</td><td>Conflitto di interessi dei valutatori, motivazione dei punteggi, trasparenza.</td></tr>
<tr><td>6. Concessione</td><td>Provvedimento di concessione, comunicazione al beneficiario, registrazione dell'aiuto sul RNA con il codice COR.</td><td>Registrazione prima della concessione, tetti di aiuto, cumulo.</td></tr>
<tr><td>7. Realizzazione</td><td>Il beneficiario realizza il progetto e sostiene le spese. Possibile anticipo (con garanzia) e stati di avanzamento.</td><td>Variazioni di progetto, proroghe, rispetto dei tempi.</td></tr>
<tr><td>8. Rendicontazione</td><td>Presentazione di spese quietanzate e documentazione di prova.</td><td>Ammissibilità, congruità, tracciabilità, doppio finanziamento.</td></tr>
<tr><td>9. Verifiche</td><td>Controllo amministrativo (a tavolino) sul 100% delle domande di rimborso. Controllo in loco su campione basato sul rischio.</td><td>Documenti falsi, spese non pertinenti, appalti irregolari.</td></tr>
<tr><td>10. Erogazione del saldo</td><td>Importo ammesso per l'aliquota di aiuto, meno gli anticipi già pagati. Pagamento entro 80 giorni dalla domanda di rimborso.</td><td>Ritardi di pagamento, compensazioni, DURC al momento del pagamento.</td></tr>
<tr><td>11. Monitoraggio</td><td>Invio dei dati alla BDU, indicatori di output e di risultato.</td><td>Qualità del dato, CUP corretto.</td></tr>
<tr><td>12. Stabilità e chiusura</td><td>Mantenimento di investimento e occupazione nel periodo previsto. Controlli successivi.</td><td>Cessazione, rilocalizzazione, cessione (art. 65 RDC).</td></tr>
<tr><td>13. Revoca e recupero</td><td>Revoca totale o parziale, con recupero degli importi e interessi.</td><td>Contraddittorio (art. 10-bis L. 241), motivazione, termini di autotutela.</td></tr>
</tbody></table>

<h3>Esempio svolto: dal rendiconto al saldo</h3>
<div class="ex">
<p>Un'impresa ha un contributo concesso dell'<b>50%</b> su spese ammesse in domanda di 100.000 €. Ha già ricevuto un anticipo di <b>40.000 €</b>. In rendicontazione presenta 100.000 € di spese. Il controllo amministrativo ne esclude <b>12.000 €</b> (una fattura non pertinente e un pagamento in contanti).</p>
<ul>
<li>Spesa ammessa: 100.000 − 12.000 = 88.000 €.</li>
<li>Contributo spettante: 50% di 88.000 = 44.000 €.</li>
<li>Saldo: 44.000 − 40.000 = <b>4.000 €</b>.</li>
</ul>
<p>Se l'esclusione fosse stata di 40.000 €, la spesa ammessa sarebbe 60.000 €, il contributo 30.000 €, e l'anticipo di 40.000 € richiederebbe un recupero di 10.000 €.</p>
</div>

<h3>Verifiche preliminari: soglie da ricordare</h3>
<ul>
<li><b>DURC</b>: documento di regolarità contributiva, validità 120 giorni.</li>
<li><b>Antimafia</b> (D.Lgs. 159/2011): la comunicazione antimafia serve fino a 150.000 €; sopra 150.000 € serve l'informazione antimafia.</li>
<li><b>Visure RNA</b>: Aiuti, de minimis e Deggendorf, prima di concedere.</li>
<li><b>Dichiarazioni sostitutive</b>: si controllano a campione o in caso di dubbio (art. 71 DPR 445/2000). Se false: decadenza (art. 75) e sanzioni penali (art. 76).</li>
</ul>

<h3>Segnali di allarme (red flag)</h3>
<ul>
<li>Fatture con numerazione consecutiva emesse a ridosso della scadenza, importi tondi, descrizioni generiche.</li>
<li>Fornitori con lo stesso indirizzo, lo stesso IBAN o legami societari con il beneficiario.</li>
<li>Importi poco sotto una soglia: per esempio affidamenti da 139.000 € quando la soglia dell'affidamento diretto è 140.000 €, o frazionamenti artificiosi.</li>
<li>Date incoerenti: spese anteriori alla domanda quando l'avviso richiede l'effetto di incentivazione, pagamenti dopo il termine, documenti firmati in date impossibili.</li>
<li>Stessa spesa in rendiconti di più bandi (doppio finanziamento).</li>
</ul>
`},

{id:"spese", t:"7. Spese ammissibili e rendicontazione", topics:["ctl","sco"], html:`
<p class="lead">Che cosa si può rendicontare, che cosa no, e come si prova. È il cuore del controllo amministrativo-contabile.</p>

<h3>Requisiti generali di ammissibilità</h3>
<table class="table">
<thead><tr><th>Requisito</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Pertinenza e imputabilità</td><td>La spesa è collegata all'operazione approvata e al beneficiario.</td></tr>
<tr><td>Effettività</td><td>È stata realmente sostenuta, comprovata da fattura o documento equivalente e da pagamento.</td></tr>
<tr><td>Tracciabilità</td><td>Il pagamento è avvenuto con strumento tracciabile (bonifico, carta, assegno non trasferibile). Il contante non prova la spesa.</td></tr>
<tr><td>Legittimità</td><td>Rispetta le norme UE e nazionali: appalti, aiuti di Stato, fisco, lavoro.</td></tr>
<tr><td>Competenza temporale</td><td>Sostenuta nel periodo di ammissibilità fissato dall'avviso e dal programma (nel 2021-27 fino al 31 dicembre 2029, art. 63 RDC).</td></tr>
<tr><td>Congruità</td><td>Il prezzo è in linea con il mercato. Si verifica con confronto di preventivi o prezzi di riferimento.</td></tr>
<tr><td>Buona gestione finanziaria</td><td>Economicità, efficienza, efficacia.</td></tr>
<tr><td>Assenza di doppio finanziamento</td><td>La stessa spesa non è coperta da un altro contributo pubblico, salvo cumulo ammesso.</td></tr>
</tbody></table>
<p class="note">In generale l'ammissibilità si regola con le norme nazionali (art. 63 RDC), salvo le regole specifiche del regolamento. Per il 2021-27 la norma nazionale è il DPR 66/2025.</p>

<h3>Spese non ammissibili tipiche (art. 64 RDC e normativa nazionale)</h3>
<ul>
<li>Interessi passivi, salvo contributi in conto interessi.</li>
<li>IVA recuperabile. L'IVA non recuperabile è ammissibile secondo l'art. 16 del DPR 66/2025, per operazioni sotto i 5 milioni di euro.</li>
<li>Multe, penali, spese legali di contenzioso.</li>
<li>Attività non retribuite di volontari come costo (art. 5 DPR 66/2025).</li>
<li>Oneri bancari su conti già esistenti.</li>
<li>Operazioni interrotte o sospese, tranne forza maggiore (art. 23.5).</li>
</ul>

<h3>Le categorie di spesa</h3>
<ul>
<li><b>Personale</b>: costo effettivo oppure opzione semplificata. Si prova con contratti, buste paga, timesheet o altro documento che attribuisca il tempo all'operazione. Il costo orario standard è l'ultimo costo annuo lordo documentato diviso 1.720 ore.</li>
<li><b>Consulenze e servizi</b>: contratto, deliverable, fattura, pagamento. Si controlla anche la procedura di affidamento.</li>
<li><b>Attrezzature</b>: spesa o quota di ammortamento secondo l'avviso. Per il materiale usato servono dichiarazione del venditore, congruità e, nel DPR 66/2025, il limite di 5 anni.</li>
<li><b>Opere e immobili</b>: titoli edilizi, SAL, collaudo. Per l'acquisto di edifici il periodo di riferimento è 5 anni (era 10).</li>
<li><b>Spese generali</b>: tasso forfettario o costi reali imputati con criterio giustificato.</li>
</ul>

<h3>I documenti di prova</h3>
<table class="table">
<thead><tr><th>Evento</th><th>Prova</th></tr></thead>
<tbody>
<tr><td>Acquisto di beni o servizi</td><td>Ordine o contratto, fattura elettronica con CUP e dicitura di legge, documento di trasporto, collaudo o verbale di consegna.</td></tr>
<tr><td>Pagamento</td><td>Bonifico con causale che richiami fattura e CUP, estratto conto, quietanza.</td></tr>
<tr><td>Personale</td><td>Lettera di incarico, busta paga, F24 e DM10 o UniEmens, timesheet.</td></tr>
<tr><td>Affidamento</td><td>Determina a contrarre, preventivi, CIG, verifica requisiti dell'operatore.</td></tr>
<tr><td>Output realizzato</td><td>Relazione tecnica, foto, report, deliverable. Con le SCO si controlla l'output, non la singola fattura.</td></tr>
</tbody></table>

<h3>Stabilità delle operazioni (art. 65 RDC)</h3>
<p>Il contributo va restituito se, entro <b>cinque anni dal pagamento finale al beneficiario</b> (tre anni per le PMI nei casi di mantenimento di investimenti o posti di lavoro, o il periodo previsto dalle norme sugli aiuti di Stato), l'attività produttiva cessa o è rilocalizzata fuori dalla regione, cambia la proprietà con un vantaggio indebito, oppure l'operazione subisce una modifica sostanziale che ne pregiudica natura, obiettivi o condizioni di attuazione.</p>

<h3>Esempio svolto: IVA e spese</h3>
<div class="ex">
<p>Spesa rendicontata: fattura di 61.000 € con IVA al 22% inclusa. L'imponibile è <b>50.000 €</b> (61.000 : 1,22), l'IVA 11.000 €. Il beneficiario recupera l'IVA in dichiarazione.</p>
<ul>
<li>L'IVA recuperabile <b>non è ammissibile</b>: spesa ammissibile 50.000 €.</li>
<li>Se invece fosse un ente che non può recuperare l'IVA, e l'operazione costasse meno di 5 milioni di euro, l'intero importo di 61.000 € sarebbe ammissibile.</li>
</ul>
</div>
`},

{id:"aid", t:"8. Aiuti di Stato in dettaglio", topics:["aid"], html:`
<p class="lead">Argomento centrale per chi istruisce avvisi alle imprese. Qui sono i concetti, le soglie e tre esempi svolti.</p>

<h3>La definizione (art. 107, par. 1, TFUE)</h3>
<p>Sono incompatibili con il mercato interno gli aiuti concessi dagli Stati, o mediante risorse statali, sotto qualsiasi forma, che favoriscono talune imprese o talune produzioni falsando o minacciando di falsare la concorrenza, nella misura in cui incidano sugli scambi tra Stati membri. I cinque elementi da riconoscere:</p>
<ol>
<li><b>Risorse statali</b> (anche regionali e degli enti pubblici) e imputabilità allo Stato.</li>
<li><b>Vantaggio economico</b> che l'impresa non otterrebbe alle normali condizioni di mercato.</li>
<li><b>Selettività</b>: favorisce alcune imprese o settori, non tutti.</li>
<li><b>Impresa</b>: ogni entità che esercita un'attività economica, a prescindere dalla forma giuridica.</li>
<li><b>Effetto su concorrenza e scambi</b>.</li>
</ol>
<p>Forme: sovvenzioni, prestiti agevolati, garanzie, agevolazioni fiscali, conferimenti di capitale, cessione di beni o servizi sotto mercato. L'aiuto non è definito dalla forma, ma dall'effetto.</p>

<h3>Compatibilità e procedura</h3>
<ul>
<li><b>Compatibili di diritto</b> (art. 107, par. 2): aiuti sociali ai singoli consumatori, calamità naturali, aree tedesche colpite dalla divisione.</li>
<li><b>Possono essere compatibili</b> (art. 107, par. 3): sviluppo di regioni con tenore di vita anormalmente basso, progetti di comune interesse europeo, sviluppo di attività o regioni, cultura e patrimonio, altre categorie decise dal Consiglio.</li>
<li><b>Notifica preventiva</b> alla Commissione e divieto di concedere l'aiuto prima della decisione (art. 108, par. 3, clausola di standstill). Un aiuto illegale va recuperato con interessi (Reg. UE 2015/1589).</li>
<li>Tre vie per non notificare: <b>de minimis</b>, <b>GBER</b> (esenzione per categoria), regimi già approvati dalla Commissione.</li>
</ul>

<h3>De minimis, Reg. (UE) 2023/2831</h3>
<table class="table">
<thead><tr><th>Aspetto</th><th>Regola</th></tr></thead>
<tbody>
<tr><td>Massimale</td><td>300.000 € per impresa unica, per Stato membro, su un periodo di tre anni valutato su base mobile</td></tr>
<tr><td>Validità</td><td>Dal 1 gennaio 2024 al 31 dicembre 2030</td></tr>
<tr><td>Data di concessione</td><td>Quando l'impresa acquisisce il diritto legale a ricevere l'aiuto</td></tr>
<tr><td>Registro</td><td>Registro centrale dal 1 gennaio 2026: caricamento entro 20 giorni lavorativi, conservazione 10 anni. In Italia lo strumento è il RNA.</td></tr>
<tr><td>Esclusioni</td><td>Produzione primaria agricola e pesca (regolamenti dedicati), attività legate all'esportazione, preferenza di prodotti nazionali</td></tr>
<tr><td>Cumulo</td><td>Aiuti de minimis sulla stessa soglia si sommano. Con altri aiuti sugli stessi costi non si può superare l'intensità massima</td></tr>
</tbody></table>

<h3>Impresa unica</h3>
<p>Due imprese sono "un'impresa unica" se ricorre uno di questi legami: una detiene la maggioranza dei diritti di voto dell'altra; una può nominare o revocare la maggioranza dell'organo di amministrazione dell'altra; una esercita un'influenza dominante per contratto o statuto; una controlla da sola, in base a un accordo con altri soci, la maggioranza dei diritti di voto dell'altra. Valgono anche i legami a catena. Nelle fusioni e acquisizioni, gli aiuti precedenti delle imprese coinvolte si sommano.</p>

<h3>GBER, Reg. (UE) 651/2014</h3>
<ul>
<li>Dichiara compatibili e <b>esenta dalla notifica</b> gli aiuti che rispettano le condizioni di categoria. Si applica fino al <b>31 dicembre 2026</b> (versione del 30 giugno 2023). Per i regimi già esentati vale un periodo di transizione di sei mesi, fino al 30 giugno 2027 (art. 58, par. 4).</li>
<li><b>Stato della revisione</b>: la Commissione ha consultato gli stakeholder dal 25 febbraio al 23 aprile 2026. Le fonti consultate, aggiornate a ottobre 2026, riportano che il nuovo testo non risultava ancora adottato e che l'adozione era prevista per fine 2026 con entrata in vigore il 1 gennaio 2027. Verifica l'esito se ti interessa, ma il quesito di prova più probabile riguarda la scadenza del 31 dicembre 2026.</li>
<li><b>Effetto di incentivazione</b> (art. 6): per le PMI i lavori non devono essere iniziati prima della domanda.</li>
<li><b>Cumulo</b> (art. 8): aiuti con costi ammissibili individuabili diversi si cumulano liberamente. Sugli stessi costi non si supera l'intensità o l'importo massimo più elevato.</li>
<li><b>Esclusioni</b>: imprese in difficoltà e imprese destinatarie di un ordine di recupero pendente (principio Deggendorf).</li>
<li><b>Intensità massime per R&S (art. 25)</b>: ricerca fondamentale 100%, ricerca industriale 50%, sviluppo sperimentale 25%. Maggiorazioni: +20 punti per le piccole imprese, +10 per le medie, entro un tetto complessivo dell'80%.</li>
<li><b>Investimenti delle PMI (art. 17)</b>: 20% per le piccole imprese e 10% per le medie.</li>
</ul>

<h3>Definizione di PMI (Raccomandazione 2003/361/CE)</h3>
<table class="table">
<thead><tr><th>Categoria</th><th>Occupati (ULA)</th><th>Fatturato</th><th>Totale di bilancio</th></tr></thead>
<tbody>
<tr><td>Micro</td><td>meno di 10</td><td>fino a 2 mln €</td><td>fino a 2 mln €</td></tr>
<tr><td>Piccola</td><td>meno di 50</td><td>fino a 10 mln €</td><td>fino a 10 mln €</td></tr>
<tr><td>Media</td><td>meno di 250</td><td>fino a 50 mln €</td><td>fino a 43 mln €</td></tr>
</tbody></table>
<p class="note">Il criterio degli occupati è obbligatorio. Tra fatturato e bilancio basta rispettare uno dei due. Imprese collegate o associate si sommano.</p>

<h3>Strumenti nazionali</h3>
<ul>
<li><b>RNA</b>, Registro nazionale degli aiuti (art. 52 L. 234/2012). Ogni concessione riceve un <b>COR</b> (codice concessione RNA). Prima di concedere si consultano le visure: Aiuti, de minimis, Deggendorf.</li>
<li><b>Carta degli aiuti a finalità regionale 2022-2027</b>: individua le aree in cui si possono dare aiuti a finalità regionale, con intensità massime per zona. Approvata dalla Commissione e modificata più volte (l'ultima modifica citata è dell'ottobre 2024).</li>
<li><b>Equivalente sovvenzione lordo (ESL)</b>: valore dell'aiuto contenuto in un prestito o in una garanzia, calcolato al tasso di riferimento.</li>
</ul>

<h3>Tre esempi svolti</h3>
<div class="ex">
<p><b>Esempio 1, de minimis.</b> Un'impresa ha ricevuto in de minimis 120.000 € il 10/2/2024, 90.000 € il 5/6/2025 e 50.000 € il 20/3/2026. Il 15/12/2026 si vuole concedere un nuovo aiuto di 60.000 €.</p>
<ul>
<li>I tre anni precedenti vanno dal 16/12/2023 al 15/12/2026: tutti e tre gli aiuti rientrano. Totale 260.000 €.</li>
<li>Con il nuovo aiuto: 320.000 € &gt; 300.000 €. Non si può concedere per intero. Il massimo concedibile è <b>40.000 €</b>.</li>
<li>Se la concessione avvenisse il 15/3/2027, l'aiuto del 10/2/2024 sarebbe fuori finestra: 90.000 + 50.000 + 60.000 = 200.000 €, concedibile per intero.</li>
</ul>
</div>
<div class="ex">
<p><b>Esempio 2, impresa unica.</b> Alfa Srl detiene il 60% del capitale di Beta Srl. Alfa ha ricevuto 180.000 € in de minimis negli ultimi tre anni, Beta 100.000 €.</p>
<ul>
<li>Sono impresa unica: si sommano. 280.000 €.</li>
<li>Per un nuovo aiuto a Beta il margine residuo è <b>20.000 €</b>, non 200.000 €.</li>
</ul>
</div>
<div class="ex">
<p><b>Esempio 3, GBER ricerca.</b> Progetto di ricerca industriale con costi ammissibili di 400.000 €.</p>
<ul>
<li>Piccola impresa: 50% + 20 = 70% → 280.000 €.</li>
<li>Media impresa: 50% + 10 = 60% → 240.000 €.</li>
<li>Grande impresa: 50% → 200.000 €.</li>
</ul>
<p>Per lo sviluppo sperimentale la base è 25%: 45% per le piccole, 35% per le medie.</p>
</div>
<div class="ex">
<p><b>Esempio 4, prestito a tasso zero (semplificato).</b> Prestito di 40.000 € rimborsato in quattro rate annuali costanti di capitale (10.000 € l'anno). Tasso di riferimento ipotetico: 5%.</p>
<ul>
<li>Capitale residuo medio per anno: 40.000, 30.000, 20.000, 10.000.</li>
<li>Interessi di mercato non pagati: 5% × (40.000 + 30.000 + 20.000 + 10.000) = <b>5.000 €</b>.</li>
</ul>
<p>Il calcolo ufficiale attualizza i flussi, quindi l'ESL è un po' più basso. Il punto da ricordare: anche un prestito a tasso zero è un aiuto.</p>
</div>
`},

{id:"sco", t:"9. Costi semplificati: formule ed esempi", topics:["sco"], html:`
<p class="lead">Le opzioni semplificate in materia di costi (SCO) sostituiscono la rendicontazione fattura per fattura. I quesiti sono spesso numerici: conviene saper fare i conti.</p>

<h3>Le forme (art. 53 RDC)</h3>
<table class="table">
<thead><tr><th>Forma</th><th>Come funziona</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td>Costi reali</td><td>Rimborso di quanto effettivamente speso</td><td>Fattura da 12.000 €</td></tr>
<tr><td>Costo unitario</td><td>Importo per unità di output o di tempo</td><td>35 € per ora di formazione per allievo</td></tr>
<tr><td>Somma forfettaria</td><td>Importo complessivo predeterminato per l'intera operazione o una parte</td><td>20.000 € per un progetto di certificazione</td></tr>
<tr><td>Tasso forfettario</td><td>Percentuale applicata a una o più categorie di costo</td><td>15% dei costi di personale per i costi indiretti</td></tr>
<tr><td>Combinazione</td><td>Le precedenti unite, purché non coprano gli stessi costi</td><td>Costi reali per le attrezzature e tasso per le spese generali</td></tr>
<tr><td>Finanziamenti non collegati ai costi</td><td>Pagamento al raggiungimento di condizioni o risultati</td><td>Rimborso a stati di avanzamento verificati</td></tr>
</tbody></table>

<div class="key"><b>Soglia da ricordare.</b> Per operazioni con costo totale <b>fino a 200.000 €</b> il contributo è dato in forma di opzioni semplificate, salvo che si tratti di aiuti di Stato. Non è 300.000: quella è la soglia del de minimis.</div>

<h3>Tassi forfettari sui costi indiretti (art. 54)</h3>
<ul>
<li>Fino al <b>7%</b> dei costi diretti ammissibili, senza obbligo di calcolo.</li>
<li>Fino al <b>15%</b> dei costi diretti di personale ammissibili, senza obbligo di calcolo.</li>
<li>Fino al <b>25%</b> dei costi diretti ammissibili, se il tasso si fonda su un metodo di calcolo giusto, equo e verificabile.</li>
</ul>
<p>L'art. 56 prevede un tasso forfettario fino al <b>40%</b> dei costi diretti di personale per coprire tutti gli altri costi ammissibili dell'operazione.</p>

<h3>Costo orario del personale (art. 55)</h3>
<p>Per il personale a tempo pieno: <b>ultimo costo annuo lordo documentato diviso 1.720 ore</b>. In alternativa si può usare il costo medio orario mensile (costo mensile diviso le ore lavorabili del mese), come ricorda anche il DPR 66/2025.</p>

<h3>Esempi svolti</h3>
<div class="ex">
<p><b>Costi indiretti.</b> Costi diretti ammissibili 120.000 €, di cui 70.000 € di personale.</p>
<ul>
<li>7% dei costi diretti: 120.000 × 0,07 = <b>8.400 €</b>.</li>
<li>15% dei costi di personale: 70.000 × 0,15 = <b>10.500 €</b>.</li>
<li>25% dei costi diretti (con metodo giustificato): 120.000 × 0,25 = <b>30.000 €</b>.</li>
<li>40% del personale per tutti gli altri costi: 70.000 × 0,40 = <b>28.000 €</b>.</li>
</ul>
</div>
<div class="ex">
<p><b>Costo orario.</b> Ultimo costo annuo lordo documentato: 41.280 €. Costo orario = 41.280 / 1.720 = <b>24 €</b>. Il dipendente lavora 300 ore sull'operazione: 24 × 300 = <b>7.200 €</b>.</p>
</div>
<div class="ex">
<p><b>Unità di costo.</b> Un corso prevede 12 allievi e 80 ore. Costo unitario standard 6,50 € per ora e per allievo: 6,50 × 80 × 12 = <b>6.240 €</b>. Se un allievo si ritira dopo 40 ore, il costo per quell'allievo si riduce a 6,50 × 40 = 260 €, e il totale scende a 6.240 − 260 = <b>5.980 €</b>.</p>
</div>
<div class="ex">
<p><b>Soglia.</b> Operazione da 185.000 €, non aiuto di Stato: contributo in SCO. Operazione da 185.000 € con aiuto di Stato a un'impresa: la regola non si applica, si può rimborsare a costi reali. Operazione da 260.000 €, non aiuto: l'obbligo non scatta.</p>
</div>

<h3>Come si controlla una SCO</h3>
<ul>
<li>Si verifica che l'<b>output o il risultato</b> sia stato realizzato (ore svolte, allievi formati, deliverable consegnato), non le singole fatture.</li>
<li>Si verifica che il metodo di calcolo sia documentato nell'atto di adozione (giusto, equo, verificabile).</li>
<li>Rimane il controllo su appalti, aiuti di Stato, doppio finanziamento e pubblicità.</li>
<li>Una SCO adottata in un altro programma o in un ciclo precedente può essere riutilizzata per operazioni analoghe (DPR 66/2025, art. 4.3).</li>
</ul>
`},

{id:"ctl", t:"10. Controlli, audit, irregolarità", topics:["ctl"], html:`
<p class="lead">Chi controlla chi, che cosa cerca e che cosa succede quando trova un errore.</p>

<h3>I livelli di controllo</h3>
<table class="table">
<thead><tr><th>Livello</th><th>Chi</th><th>Che cosa</th></tr></thead>
<tbody>
<tr><td>Primo livello</td><td>Autorità di gestione (o organismo intermedio)</td><td>Verifiche di gestione amministrative sul 100% delle domande di rimborso e verifiche in loco su campione basato sul rischio (art. 74)</td></tr>
<tr><td>Audit</td><td>Autorità di audit</td><td>Audit di sistema, audit delle operazioni su campione statistico (art. 79), audit dei conti. Parere annuale e relazione annuale di controllo</td></tr>
<tr><td>Livello UE</td><td>Commissione, Corte dei conti europea, OLAF</td><td>Audit di programma, indagini antifrode</td></tr>
<tr><td>Livello nazionale</td><td>IGRUE, Guardia di Finanza, Corte dei conti</td><td>Monitoraggio, controlli finanziari, giudizio di responsabilità</td></tr>
</tbody></table>
<p>Le verifiche di gestione seguono un approccio basato sul rischio e devono essere proporzionate. Per il beneficiario il pagamento arriva entro <b>80 giorni</b> dalla domanda, salvo sospensioni per documenti mancanti.</p>

<h3>Tasso di errore e soglia di rilevanza</h3>
<ul>
<li>L'audit estrae un campione rappresentativo, accerta gli errori e li proietta sulla popolazione. Distingue errori casuali, sistemici e anomali.</li>
<li>La <b>soglia di rilevanza è il 2%</b> della spesa dichiarata. Il tasso di errore residuo totale oltre il 2% impone rettifiche o porta a un parere con riserva.</li>
</ul>
<div class="ex">
<p><b>Esempio.</b> Spesa nei conti: 20.000.000 €. Errore proiettato accertato: 300.000 €. Tasso = 300.000 / 20.000.000 = <b>1,5%</b>: sotto il 2%, parere senza riserve. Con un errore di 500.000 € il tasso sarebbe 2,5%: sopra soglia, servono rettifiche.</p>
</div>

<h3>Irregolarità, frode, sospetta frode</h3>
<ul>
<li><b>Irregolarità</b> (art. 2 RDC): qualsiasi violazione del diritto applicabile, derivante da un'azione o un'omissione di un operatore economico coinvolto nell'attuazione dei fondi, che abbia o possa avere come conseguenza un pregiudizio al bilancio dell'Unione mediante l'imputazione di una spesa indebita.</li>
<li><b>Frode</b>: comportamento intenzionale per ottenere un vantaggio illecito o danneggiare il bilancio UE (direttiva PIF 2017/1371). Si distingue dall'irregolarità per l'elemento intenzionale.</li>
<li>Una spesa irregolare viene <b>ritirata</b> dai conti e si avvia il recupero verso il beneficiario. Le irregolarità e le sospette frodi si comunicano tramite il sistema IMS alla Commissione (OLAF). In Italia la Guardia di Finanza e il COLAF coordinano il contrasto.</li>
<li>Strumenti di prevenzione: autovalutazione del rischio di frode, banche dati e il sistema Arachne di punteggio del rischio.</li>
</ul>

<h3>Conflitto di interessi e doppio finanziamento</h3>
<ul>
<li>Il conflitto di interessi si ha quando l'esercizio imparziale e obiettivo delle funzioni è compromesso da interessi familiari, affettivi, economici o altro motivo personale (art. 61 del Regolamento finanziario UE 2018/1046). L'obbligo è di astenersi e segnalare. Per la PA italiana anche art. 6-bis L. 241/1990 e art. 7 DPR 62/2013.</li>
<li>Il <b>divieto di doppio finanziamento</b> impedisce di coprire la stessa spesa con due fonti pubbliche. Si controlla con l'annullamento dei giustificativi (timbro o dicitura con CUP e programma), con il confronto di banche dati e con le dichiarazioni dei beneficiari.</li>
</ul>

<h3>Si.Ge.Co. e piste di controllo</h3>
<ul>
<li>Il <b>Si.Ge.Co.</b> documenta organizzazione, funzioni, procedure, strumenti e piste di controllo. La <b>pista di controllo</b> permette di ricostruire, per ogni operazione, il percorso dei documenti e dei flussi finanziari.</li>
<li>Principio della <b>separazione delle funzioni</b>: chi seleziona, chi verifica e chi paga sono soggetti o uffici distinti. Chi fa le verifiche non può partecipare alla selezione della stessa operazione.</li>
<li>I documenti si conservano per il periodo stabilito dall'art. 82 RDC. Per gli aiuti di Stato la conservazione delle informazioni è di 10 anni.</li>
</ul>

<h3>Esempio svolto: campione</h3>
<div class="ex">
<p>Un avviso ha 400 domande di rimborso. L'AdG fa il controllo amministrativo sul <b>100%</b> (400) e un controllo in loco su un campione del 10% basato sul rischio: 40 progetti. Dei 40, 6 hanno errori. Tasso di campione: 6 / 40 = <b>15%</b>. Il tasso alto induce ad ampliare il campione o a verificare se l'errore è sistemico (per esempio la stessa categoria di spesa).</p>
</div>
`}

]);
