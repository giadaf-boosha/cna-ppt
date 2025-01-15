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
  MapPin,
  Briefcase,
  LineChart,
  Workflow,
  MessageSquare,
  ArrowUpRight,
  Book,
  Banknote
} from 'lucide-react';

const VisioniPresentation = () => {
  const [activeSection, setActiveSection] = useState<'results' | 'details' | 'innovation'>('results');

  // Palette di colori per le fette dei PieChart
  const COLORS = [
    '#2563EB', 
    '#3B82F6', 
    '#60A5FA', 
    '#93C5FD', 
    '#BFDBFE', 
    '#A5B4FC', 
    '#6366F1', 
    '#4F46E5', 
    '#4338CA', 
    '#3730A3'
  ];

  // ==============================
  // Dati SEZIONE "RISULTATI PRINCIPALI" (results)
  // ==============================

  // (Q1) Distribuzione assessment nei territori
  const assessmentDistribution = [
    { name: 'Ravenna', value: 35 },       // 24,82%
    { name: 'Forlì-Cesena', value: 15 },  // 10,64%
    { name: 'Rimini', value: 14 },        // 9,93%
    { name: 'Bologna', value: 13 },       // 9,22%
    { name: 'Modena', value: 12 },        // 8,51%
    { name: 'Piacenza', value: 11 },      // 7,80%
    { name: 'Reggio Emilia', value: 11 }, // 7,80%
    { name: 'Ferrara', value: 10 },       // 7,09%
    { name: 'Imola', value: 10 },         // 7,09%
    { name: 'Parma', value: 10 }          // 7,09%
  ];

  // (Q14) Principali settori di attività
  const companySectors = [
    { name: 'Metalmeccanica', value: 31 },             
    { name: 'Informatica/Consulenza', value: 29 },      
    { name: 'Altro', value: 28 },                       
    { name: 'Costruzioni/Impiantistica', value: 19 },   
    { name: 'Commercio', value: 15 },                   
    { name: 'Tessile/Abbigliamento/Calzature', value: 10 },
    { name: 'Macchine elettriche/elettroniche', value: 9 },
    { name: 'Alimentare', value: 7 },
    { name: 'Automotive', value: 7 },
    { name: 'Legno e mobili', value: 5 },
    { name: 'Carta/Stampa/Editoria', value: 5 },
    { name: 'Materie plastiche', value: 5 },
    { name: 'Trasporti/Logistica', value: 5 },
    { name: 'Nautico', value: 3 },
    { name: 'Turismo/Ristorazione', value: 3 },
    { name: 'Vetro/Ceramica/Pietra', value: 2 },
    { name: 'Aerospaziale', value: 1 }
  ];

  // (Q159 - IA2) Stato di adozione AI
  const adoptionStatus = [
    { name: 'Non pianificata', value: 10.64 },
    { name: 'In valutazione', value: 45.39 },
    { name: 'Progetti pilota', value: 30.50 },
    { name: 'Operativa', value: 12.77 },
    { name: 'Integrata', value: 0.71 }
  ];

  // (Q173 - IA9) Benefici attesi
  const expectedBenefits = [
    { name: 'Produttività', value: 58.87 },
    { name: 'Marketing', value: 48.23 },
    { name: 'Automazione', value: 34.75 },
    { name: 'Qualità prodotti', value: 31.21 },
    { name: 'Riduzione costi', value: 29.79 }
  ];

  // (Q194 - IA30) Principali aree di interesse AI generativa
  const aiApplications = [
    { name: 'Gen. contenuti', value: 80.45 },
    { name: 'Gen. immagini', value: 53.38 },
    { name: 'Design progetti', value: 37.59 },
    { name: 'Gen. codice', value: 29.32 },
    { name: 'Gen. audio', value: 9.02 }
  ];

  // (Q168 - IA4) Sfide implementative
  const implementationChallenges = [
    { name: 'Mancanza conoscenza', value: 57.76 },
    { name: 'Identificazione casi uso', value: 48.28 },
    { name: 'Incertezza benefici', value: 43.97 },
    { name: 'Mancanza competenze', value: 40.52 },
    { name: 'Costi implementazione', value: 18.97 }
  ];

  // ==============================
  // Dati SEZIONE "DETTAGLI ASSESSMENT" (details)
  // ==============================

  // Numero di assessment completati
  const totalAssessments = 141; // (aggiornato rispetto ai 130 precedenti)

  // % di aziende già attive con IA (somma di progetti pilota + operative + integrate)
  // 30.50 + 12.77 + 0.71 ≈ 44.0%
  const alreadyActivePercentage = 44.0;

  // Benefici attesi (dettaglio) - stesse voci già viste, ma potresti descriverle in modo più discorsivo
  const detailsBenefitsData = [
    { label: 'Efficienza operativa', value: 58.87 },   // corrisponde a 'Produttività'
    { label: 'Marketing e vendite', value: 48.23 },    // corrisponde a 'Marketing'
    { label: 'Automazione', value: 34.75 },            // corrisponde a 'Automazione'
  ];

  // Sfide e barriere (dettaglio)
  const detailsBarriersData = [
    { label: 'Gap di conoscenza', value: 57.76 },
    { label: 'Identificazione casi d’uso', value: 48.28 },
    { label: 'Incertezza benefici', value: 43.97 }
  ];

  // Necessità di supporto (basato su Q171 - IA7)
  // consultazione con esperti (68.79%), eventi e formazione (58.16%), bandi e finanziamenti (39.01%)
  const supportNeeds = {
    expertConsulting: 68.79,
    trainingEvents: 58.16,
    fundingSupport: 39.01
  };

  // Prospettive future (Q172 - IA8 e Q205 - IA41)
  // – 87.76% prevede di adottare l’IA nei prossimi 1-2 anni
  // – 65.96% ambizione di base
  // – 26.95% aspirazione a leadership e innovazione (sommando 19.15% + 6.38% + 1.42% ≈ 26.95)
  const futureProspects = {
    highInterest: 87.76,
    baseAmbition: 65.96,
    innovationAspirations: 26.95
  };

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
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'innovation' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('innovation')}
        >
          Innovazione sistemica
        </button>
      </div>

      {/* ==============================
          SEZIONE: RISULTATI PRINCIPALI
       ============================== */}
      {activeSection === 'results' && (
        <div className="space-y-8">
          {/* Header Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800">
                Progetto Visioni Interconnesse: analisi approfondita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">141</div>
                  <div className="text-sm text-gray-600">Assessment completati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">100%</div>
                  <div className="text-sm text-gray-600">Laboratori realizzati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">87,76%</div>
                  <div className="text-sm text-gray-600">
                    delle imprese prevede di esplorare o adottare soluzioni AI nei prossimi 1-2 anni
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
                Distribuzione degli assessment nei territori
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
              <p className="mt-4 text-sm text-gray-600">
                La maggior parte degli assessment è stata condotta a Ravenna (24,82%, 35 aziende). 
                Seguono Forlì-Cesena (10,64%, 15 aziende), Rimini (9,93%, 14 aziende) e Bologna (9,22%, 13 aziende). 
                Modena (8,51%, 12 aziende), Piacenza e Reggio Emilia (7,80% con 11 aziende ciascuno), 
                infine Ferrara, Imola e Parma con il 7,09% (10 aziende ciascuna).
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
              <p className="mt-4 text-sm text-gray-600">
                I settori principali risultano essere la Metalmeccanica (21,99%, 31 aziende)
                e l&apos;Informatica/Consulenza (20,57%, 29 aziende). Seguono la voce “Altro” 
                (19,86%, 28 aziende), Costruzioni/Impiantistica (13,48%, 19 aziende) 
                e Commercio (10,64%, 15 aziende).
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
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Secondo i dati raccolti, il 10,64% delle aziende non ha piani 
                per adottare soluzioni di IA, mentre il 45,39% sta ancora valutando 
                possibili applicazioni. Il 30,50% è in fase di sperimentazione 
                o progetti pilota, il 12,77% ha già applicazioni operative in 
                specifiche aree aziendali e lo 0,71% utilizza l&apos;IA in 
                modo diffuso e integrato nei processi aziendali.
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
              <p className="mt-4 text-sm text-gray-600">
                I principali benefici attesi sono l&apos;aumento di produttività ed efficienza (58,87%), 
                il potenziamento delle attività di marketing e vendita (48,23%), 
                l&apos;automazione di attività ripetitive (34,75%), 
                il miglioramento della qualità (31,21%) 
                e la riduzione dei costi operativi (29,79%).
              </p>
            </CardContent>
          </Card>

          {/* Applicazioni AI più richieste */}
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
              <p className="mt-4 text-sm text-gray-600">
                Le aree di maggiore interesse per l&apos;utilizzo dell&apos;IA 
                generativa sono la generazione di testi e contenuti (80,45%), 
                la generazione di immagini e video (53,38%), 
                la progettazione e il design (37,59%), 
                la generazione di codice (29,32%) 
                e la generazione di audio (9,02%).
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
              <p className="mt-4 text-sm text-gray-600">
                Le principali sfide nell&apos;adozione dell&apos;IA riguardano 
                la mancanza di conoscenza (57,76%), la difficoltà di identificare i casi d&apos;uso (48,28%), 
                l&apos;incertezza sui benefici concreti (43,97%), 
                la carenza di competenze interne (40,52%) 
                e i costi di implementazione (18,97%).
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ==============================
          SEZIONE: DETTAGLI ASSESSMENT
       ============================== */}
      {activeSection === 'details' && (
        <div className="space-y-8">
          {/* Stato attuale dell'adozione AI */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Stato attuale dell&apos;adozione AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">{totalAssessments} assessment completati</p>
                    <p className="text-sm text-gray-600">
                      Mappatura approfondita dello stato di digitalizzazione e AI readiness
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Laboratori realizzati</p>
                    <p className="text-sm text-gray-600">Si conferma il 100% degli incontri previsti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      {alreadyActivePercentage}% già attivo con l&apos;AI
                    </p>
                    <p className="text-sm text-gray-600">
                      30,50% in fase pilota, 12,77% con soluzioni operative, 0,71% integrata
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefici attesi - dettaglio */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Benefici attesi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detailsBenefitsData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">
                        {item.label} ({item.value}%)
                      </p>
                      <p className="text-sm text-gray-600">
                        {/* Esempio di descrizione: puoi personalizzare */}
                        {item.label === 'Efficienza operativa'
                          ? 'Aumento della produttività e ottimizzazione dei processi.'
                          : item.label === 'Marketing e vendite'
                          ? 'Migliore targeting dei clienti e strategie commerciali.'
                          : 'Riduzione di attività ripetitive e basso valore.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sfide e barriere - dettaglio */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Sfide e barriere
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detailsBarriersData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold">
                        {item.label} ({item.value}%)
                      </p>
                      <p className="text-sm text-gray-600">
                        {/* Esempio di testo generico: da personalizzare */}
                        {item.label === 'Gap di conoscenza'
                          ? 'Mancanza di consapevolezza e know-how sulle opportunità IA.'
                          : item.label === 'Identificazione casi d’uso'
                          ? 'Difficoltà nel trovare ambiti concreti su cui applicare l’IA.'
                          : 'Incertezza sui benefici reali e sul ROI dei progetti IA.'}
                      </p>
                    </div>
                  </div>
                ))}
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
                    <p className="font-semibold">
                      Consulenza specialistica ({supportNeeds.expertConsulting}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Supporto nell&apos;identificazione e implementazione dei casi d&apos;uso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Formazione ({supportNeeds.trainingEvents}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Eventi informativi, workshop e corsi di formazione dedicati all’IA.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Finanziamenti ({supportNeeds.fundingSupport}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Accesso a bandi, programmi di supporto e incentivi fiscali.
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
                    <p className="font-semibold">
                      Alto interesse ({futureProspects.highInterest}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Previsione di adozione AI nei prossimi 1-2 anni
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Ambizione di base ({futureProspects.baseAmbition}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Raggiungere un livello iniziale con alcune applicazioni a supporto dei processi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Innovazione ({futureProspects.innovationAspirations}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      Aspirazione a diventare leader o trasformare il modello di business grazie all&apos;IA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Raccomandazioni finali (opzionale) */}
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
                    <p className="text-sm text-gray-600">Creare programmi di sviluppo competenze IA personalizzati.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Approccio graduale</p>
                    <p className="text-sm text-gray-600">Focalizzarsi su progetti pilota prima di un rollout esteso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Supporto di sistema</p>
                    <p className="text-sm text-gray-600">Coordinarsi con enti, università e fornitori specializzati.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incentivi mirati</p>
                    <p className="text-sm text-gray-600">Facilitare l&apos;accesso a bandi e agevolazioni per progetti IA.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Innovazione sistemica Section */}
      {activeSection === 'innovation' && (
        <div className="space-y-8">
          {/* Contesto */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <Network className="w-8 h-8" />
                Innovazione sistemica CNA Emilia-Romagna
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">Scenario attuale:</h3>
                <p className="text-gray-700">
                  Dalle CNA territoriali emergono richieste di soluzioni AI integrate che richiedono un approccio coordinato a livello regionale per ottimizzare investimenti e massimizzare i benefici per tutto il sistema.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Esigenze dai territori */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Esigenze dai territori
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Gestione documentale avanzata</p>
                    <p className="text-sm text-gray-600">Automazione nell&apos;analisi e processamento di documenti, pratiche e bandi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Comunicazione integrata</p>
                    <p className="text-sm text-gray-600">Sistema unificato per newsletter, social media e comunicazioni</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Knowledge management</p>
                    <p className="text-sm text-gray-600">Condivisione efficace di conoscenze e best practice tra territori</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Soluzioni integrate proposte */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Soluzioni integrate proposte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Sistema di automazione documenti
                  </h3>
                  <div className="ml-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <p className="text-sm">Analisi automatica di pratiche e documentazione</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <p className="text-sm">Generazione report standardizzati</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <p className="text-sm">Categorizzazione intelligente delle richieste</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-green-600" />
                    Hub di intelligenza artificiale
                  </h3>
                  <div className="ml-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <p className="text-sm">Assessment AI automatizzato per le imprese</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <p className="text-sm">Supporto 24/7 con chatbot specializzati</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <p className="text-sm">Monitoraggio opportunità per settore</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold flex items-center gap-2 mb-3">
                    <LineChart className="w-5 h-5 text-purple-600" />
                    Sistema di analisi predittiva
                  </h3>
                  <div className="ml-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <p className="text-sm">Monitoraggio proattivo normative e trend</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <p className="text-sm">Analisi impatto su settori specifici</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <p className="text-sm">Sistema di early warning per criticità</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vantaggi dell'approccio sistemico */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Vantaggi dell&apos;approccio sistemico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold">Ottimizzazione investimenti</h3>
                  <p className="text-sm text-gray-600">Condivisione dei costi e maggiore ritorno sull&apos;investimento</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Standardizzazione</h3>
                  <p className="text-sm text-gray-600">Qualità uniforme dei servizi su tutto il territorio</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <Network className="w-6 h-6 text-purple-600 mb-2" />
                  <h3 className="font-semibold">Sinergie territoriali</h3>
                  <p className="text-sm text-gray-600">Condivisione di risorse e best practice</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <Users className="w-6 h-6 text-yellow-600 mb-2" />
                  <h3 className="font-semibold">Sviluppo competenze</h3>
                  <p className="text-sm text-gray-600">Formazione centralizzata e knowledge sharing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap implementativa */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <PieChart className="w-6 h-6" />
                Roadmap implementativa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="font-bold text-blue-800">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Fase pilota (1-2 mesi)</p>
                    <p className="text-sm text-gray-600">Test iniziale su territorio selezionato</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="font-bold text-blue-800">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Validazione (2-3 mesi)</p>
                    <p className="text-sm text-gray-600">Ottimizzazione sulla base dei feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="font-bold text-blue-800">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Roll-out regionale (4-6 mesi)</p>
                    <p className="text-sm text-gray-600">Implementazione progressiva su tutti i territori</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VisioniPresentation;
