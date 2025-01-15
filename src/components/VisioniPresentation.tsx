// src/components/VisioniPresentation.tsx
'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Brain, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle,
  LineChart,
  ArrowUpRight,
  MapPin,
  Briefcase
} from 'lucide-react';

const VisioniPresentation = () => {
  const [activeSection, setActiveSection] = useState<'results' | 'details'>('results'); 
  // RIMOSSO "innovation"

  // Palette di colori per le torte
  const COLORS = [
    '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', 
    '#A5B4FC', '#6366F1', '#4F46E5', '#4338CA', '#3730A3'
  ];

  // Nuova distribuzione degli assessment nei territori (Q1)
  const assessmentDistribution = [
    { name: 'Ravenna', value: 35 },
    { name: 'Forlì-Cesena', value: 15 },
    { name: 'Bologna', value: 13 },
    { name: 'Rimini', value: 14 },
    { name: 'Modena', value: 12 },
    { name: 'Piacenza', value: 11 },
    { name: 'Reggio Emilia', value: 11 },
    { name: 'Imola', value: 10 },
    { name: 'Parma', value: 10 },
    { name: 'Ferrara', value: 10 }
  ];

  // Principali settori di attività (Q14)
  const companySectors = [
    { name: 'Metalmeccanica', value: 31 },
    { name: 'Informatica/Consulenza', value: 29 },
    { name: 'Altro', value: 28 },
    { name: 'Costruzioni/Impiantistica', value: 19 },
    { name: 'Commercio', value: 15 },
    { name: 'Tessile/Abbigliamento/Calzature', value: 10 },
    { name: 'Automotive', value: 7 },
    { name: 'Alimentare', value: 7 },
    { name: 'Macchine elettriche/elettroniche', value: 9 },
    { name: 'Legno e mobili', value: 5 },
    { name: 'Materie plastiche', value: 5 },
    { name: 'Trasporti/Logistica', value: 5 },
    { name: 'Carta/Stampa/Editoria', value: 5 },
    { name: 'Nautico', value: 3 },
    { name: 'Turismo/Ristorazione', value: 3 },
    { name: 'Vetro/Ceramica/Pietra', value: 2 },
    { name: 'Aerospaziale', value: 1 }
  ];

  // Stato di adozione dell’IA (Q159)
  const adoptionStatus = [
    { name: 'Non pianificata', value: 10.64 },
    { name: 'In valutazione', value: 45.39 },
    { name: 'Progetti pilota', value: 30.50 },
    { name: 'Operativa', value: 12.77 },
    { name: 'Integrata', value: 0.71 }
  ];

  // Principali benefici attesi (Q173)
  const expectedBenefits = [
    { name: 'Produttività', value: 58.87 },
    { name: 'Marketing', value: 48.23 },
    { name: 'Automazione', value: 34.75 },
    { name: 'Qualità prodotti', value: 31.21 },
    { name: 'Riduzione costi', value: 29.79 }
  ];

  // Aree di interesse per IA generativa (Q194)
  const aiApplications = [
    { name: 'Gen. contenuti', value: 80.45 },
    { name: 'Gen. immagini', value: 53.38 },
    { name: 'Design progetti', value: 37.59 },
    { name: 'Gen. codice', value: 29.32 },
    { name: 'Gen. audio', value: 9.02 }
  ];

  // Principali sfide implementative (Q168)
  const implementationChallenges = [
    { name: 'Mancanza conoscenza', value: 57.76 },
    { name: 'Identificazione casi uso', value: 48.28 },
    { name: 'Incertezza benefici', value: 43.97 },
    { name: 'Mancanza competenze', value: 40.52 },
    { name: 'Costi implementazione', value: 18.97 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'results' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('results')}
        >
          Risultati principali
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'details' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('details')}
        >
          Dettagli assessment
        </button>
        {/* SEZIONE "INNOVAZIONE SISTEMICA" RIMOSSA */}
      </div>

      {/* RISULTATI PRINCIPALI */}
      {activeSection === 'results' && (
        <div className="space-y-8">
          {/* Header Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800">
                CNA HUB 4.0: Sintesi dei risultati (rev. luglio 2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  {/* Numero di questionari completati (nuovo totale: 141) */}
                  <div className="text-3xl font-bold text-blue-800">141</div>
                  <div className="text-sm text-gray-600">
                    Questionari completati
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  {/* Dato ipotetico: manteniamo se esistono 100% laboratori realizzati, 
                      altrimenti va adeguato secondo necessità */}
                  <div className="text-3xl font-bold text-blue-800">100%</div>
                  <div className="text-sm text-gray-600">
                    Laboratori realizzati
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  {/* Probabilità di adozione IA nei prossimi 1-2 anni (Q172): 
                      somma di Abbastanza (39.72%) + Molto (26.24%) + Estremamente (21.99%) ~ 87.95% */}
                  <div className="text-3xl font-bold text-blue-800">~88%</div>
                  <div className="text-sm text-gray-600">
                    delle imprese prevede di esplorare o adottare soluzioni AI 
                    nei prossimi 1-2 anni
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distribuzione Assessment nei Territori */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Distribuzione degli assessment nei territori (tot. 141)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={assessmentDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                La rilevazione coinvolge principalmente Ravenna (24,82%, 35 aziende),
                seguita da Forlì-Cesena (10,64%, 15), Bologna (9,22%, 13), Rimini (9,93%, 14),
                Modena (8,51%, 12), Piacenza e Reggio Emilia (7,80% ciascuna, 11 aziende),
                Imola e Parma (7,09% ciascuna, 10 aziende) e Ferrara (7,09%, 10).
              </p>
            </CardContent>
          </Card>

          {/* Principali settori di attività */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Settori in cui operano le aziende
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={companySectors} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                Il questionario evidenzia una concentrazione prevalente nei
                settori Metalmeccanica (21,99%, 31 aziende),
                Informatica/Consulenza (20,57%, 29) e <em>Altro</em> (19,86%, 28),
                seguiti da Costruzioni/Impiantistica (13,48%, 19) e Commercio
                (10,64%, 15). Gli altri settori mostrano numeri inferiori ma comunque significativi.
              </p>
            </CardContent>
          </Card>

          {/* Stato di adozione */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Stato di adozione AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={adoptionStatus}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {adoptionStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                Circa il 10,64% delle aziende non ha alcun piano di adozione, mentre il 45,39% 
                sta valutando possibili applicazioni. Il 30,50% è in fase pilota, il 12,77% 
                ha già applicazioni operative e solo lo 0,71% utilizza l’IA in modo 
                diffuso e integrato.
              </p>
            </CardContent>
          </Card>

          {/* Benefici attesi */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Benefici attesi dall&apos;AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expectedBenefits}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                L&apos;aumento di produttività ed efficienza (58,87%) e il potenziamento 
                di marketing e vendite (48,23%) sono in cima alle aspettative. Seguono 
                l’automazione delle attività ripetitive (34,75%), il miglioramento della 
                qualità di prodotti e servizi (31,21%) e la riduzione dei costi operativi (29,79%).
              </p>
            </CardContent>
          </Card>

          {/* Applicazioni AI generativa */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Applicazioni AI generativa più richieste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aiApplications}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                Le principali aree di interesse includono la generazione di testi 
                (80,45%), la creazione di immagini e video (53,38%), la progettazione 
                (37,59%), la generazione di codice (29,32%) e in misura minore la 
                generazione di contenuti audio (9,02%).
              </p>
            </CardContent>
          </Card>

          {/* Sfide implementative */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Principali sfide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={implementationChallenges}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                La mancanza di conoscenza sulle opportunità (57,76%) e la difficoltà 
                nell’identificare i casi d’uso (48,28%) rappresentano le maggiori sfide. 
                Seguono l’incertezza sui benefici (43,97%), l’assenza di competenze interne 
                adeguate (40,52%) e le preoccupazioni sui costi d’implementazione (18,97%).
              </p>
            </CardContent>
          </Card>

          {/* Insights aggiuntivi */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">
                Insights chiave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* Formazione */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Formazione</h3>
                  <p className="text-sm text-gray-600">
                    68,79% richiede consulenza specifica e formazione su casi d&apos;uso AI
                  </p>
                </div>
                {/* Supporto finanziario */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Supporto finanziario</h3>
                  <p className="text-sm text-gray-600">
                    39,01% manifesta interesse per bandi e finanziamenti
                  </p>
                </div>
                {/* Cultura del dato */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Cultura del dato</h3>
                  <p className="text-sm text-gray-600">
                    54,61% dichiara di avere una cultura del dato solo parzialmente sviluppata
                  </p>
                </div>
                {/* Competenze */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Competenze</h3>
                  <p className="text-sm text-gray-600">
                    ~87,5% non dispone ancora di un team IA interno strutturato 
                    (nessuna o competenze molto limitate)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusioni e raccomandazioni */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">
                Conclusioni e raccomandazioni
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  • <span className="font-semibold">Alto potenziale di adozione:</span>{' '}
                  ~88% delle imprese interessate all&apos;IA nei prossimi 2 anni
                </p>
                <p>
                  • <span className="font-semibold">Necessità di supporto strutturato:</span>{' '}
                  Focus su formazione, consulenza e finanziamenti
                </p>
                <p>
                  • <span className="font-semibold">Approccio graduale:</span>{' '}
                  Partire da casi d&apos;uso concreti e ad alto impatto
                </p>
                <p>
                  • <span className="font-semibold">Sviluppo competenze:</span>{' '}
                  Priorità alla creazione di know-how interno
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* DETTAGLI ASSESSMENT */}
      {activeSection === 'details' && (
        <div className="space-y-8">
          {/* Stato attuale */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Stato attuale dell&apos;adozione AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Numero di questionari */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">141 assessment completati</p>
                    <p className="text-sm text-gray-600">
                      Rilevazione aggiornata sul livello di digitalizzazione e AI readiness
                    </p>
                  </div>
                </div>
                {/* Laboratori */}
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Laboratori realizzati</p>
                    <p className="text-sm text-gray-600">
                      Dato non specificato (aggiornare se necessario)
                    </p>
                  </div>
                </div>
                {/* Percentuale che sta già facendo progetti IA */}
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      ~43,27% già attivo con l&apos;IA
                    </p>
                    <p className="text-sm text-gray-600">
                      (30,50% in fase pilota, 12,77% con soluzioni operative, 0,71% integrata)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefici attesi */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Benefici attesi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Produttività (58,87%)</p>
                    <p className="text-sm text-gray-600">
                      Aumento dell’efficienza operativa e riduzione dei tempi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Automazione (34,75%)</p>
                    <p className="text-sm text-gray-600">Riduzione di attività ripetitive</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Marketing e vendite (48,23%)</p>
                    <p className="text-sm text-gray-600">Potenziamento attività commerciali</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sfide e barriere */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Sfide e barriere
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Mancanza di conoscenza (57,76%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Scarsa comprensione delle opportunità offerte dall’IA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-semibold">Identificazione casi d&apos;uso (48,28%)</p>
                    <p className="text-sm text-gray-600">
                      Difficoltà nell’individuare le applicazioni più rilevanti
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incertezza benefici (43,97%)</p>
                    <p className="text-sm text-gray-600">
                      Indecisione riguardo al ROI e ai vantaggi tangibili
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Necessità di supporto */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Necessità di supporto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Consulenza specialistica</p>
                    <p className="text-sm text-gray-600">
                      68,79% richiede supporto nell’identificazione e implementazione
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Formazione</p>
                    <p className="text-sm text-gray-600">
                      Eventi e corsi mirati per sviluppare competenze IA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Finanziamenti (39,01%)</p>
                    <p className="text-sm text-gray-600">
                      Partecipazione a bandi e incentivi per progetti innovativi
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prospettive future */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <ArrowUpRight className="w-6 h-6" />
                Prospettive future
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Alto interesse (~88%)</p>
                    <p className="text-sm text-gray-600">
                      Considerata la propensione nei prossimi 1-2 anni
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Livello base (65,96%)</p>
                    <p className="text-sm text-gray-600">
                      Le aziende puntano innanzitutto a soluzioni a supporto dei processi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">Innovazione (6,38%)</p>
                    <p className="text-sm text-gray-600">
                      Una minoranza punta a diventare leader di settore
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Raccomandazioni */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Raccomandazioni
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Formazione strutturata</p>
                    <p className="text-sm text-gray-600">
                      Avviare programmi di upskilling e reskilling interni su IA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Approccio graduale</p>
                    <p className="text-sm text-gray-600">
                      Sperimentare in aree pilota prima di scalare l’adozione
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Supporto di sistema</p>
                    <p className="text-sm text-gray-600">
                      Attivare reti e partnership per massimizzare i risultati
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incentivi mirati</p>
                    <p className="text-sm text-gray-600">
                      Facilitare l’accesso a bandi e contributi per soluzioni IA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* SEZIONE INNOVAZIONE SISTEMICA RIMOSSA */}
    </div>
  );
};

export default VisioniPresentation;
