// src/components/VisioniPresentation.tsx
'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { 
  Brain, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle,
  Network,
  Building2,
  FileText,
  MessageSquare,
  Database,
  Shield,
  Settings,
  LineChart,
  ArrowRight,
  Book,
  Banknote,
  Workflow,
  ArrowUpRight,
  PieChart as PieChartIcon,
  MapPin
} from 'lucide-react';

const VisioniPresentation = () => {
  const [activeSection, setActiveSection] = useState('results'); // results, details, innovation

  const COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#A5B4FC', '#6366F1', '#4F46E5', '#4338CA', '#3730A3'];

  // Dati per i grafici aggiornati
  const adoptionStatus = [
    { name: 'Non pianificata', value: 10.77 },
    { name: 'In valutazione', value: 45.38 },
    { name: 'Progetti pilota', value: 32.31 },
    { name: 'Operativa', value: 10.77 },
    { name: 'Integrata', value: 0.77 }
  ];

  const expectedBenefits = [
    { name: 'Produttività', value: 59.23 },
    { name: 'Marketing', value: 49.23 },
    { name: 'Automazione', value: 36.15 },
    { name: 'Riduzione costi', value: 32.31 },
    { name: 'Qualità prodotti', value: 30.77 }
  ];

  const aiApplications = [
    { name: 'Gen. contenuti', value: 83.61 },
    { name: 'Gen. immagini', value: 52.46 },
    { name: 'Design progetti', value: 38.52 },
    { name: 'Gen. codice', value: 31.15 },
    { name: 'Gen. audio', value: 9.02 }
  ];

  const implementationChallenges = [
    { name: 'Mancanza conoscenza', value: 57.27 },
    { name: 'Identificazione casi uso', value: 49.09 },
    { name: 'Incertezza benefici', value: 44.55 },
    { name: 'Mancanza competenze', value: 38.18 },
    { name: 'Costi implementazione', value: 19.09 }
  ];

  // Distribuzione degli assessment nei territori, ordinati in modo decrescente
  const assessmentDistribution = [
    { name: 'Ravenna', value: 35 },
    { name: 'Forlì-Cesena', value: 15 },
    { name: 'Bologna', value: 13 },
    { name: 'Rimini', value: 13 },
    { name: 'Modena', value: 12 },
    { name: 'Piacenza', value: 11 },
    { name: 'Reggio Emilia', value: 11 },
    { name: 'Imola', value: 10 },
    { name: 'Parma', value: 10 },
    { name: 'Ferrara', value: 0 }
  ];

  // Dati per i settori in cui operano le aziende, ordinati in modo decrescente
  const companySectors = [
    { name: 'Metalmeccanica', value: 28 },
    { name: 'Informatica/Consulenza', value: 28 },
    { name: 'Altro', value: 25 },
    { name: 'Costruzioni/Impiantistica', value: 19 },
    { name: 'Commercio', value: 14 },
    { name: 'Tessile/Abbigliamento/Calzature', value: 9 },
    { name: 'Macchine elettriche/elettroniche', value: 8 },
    { name: 'Alimentare', value: 7 },
    { name: 'Legno e mobili', value: 5 },
    { name: 'Materie plastiche', value: 5 },
    { name: 'Automotive', value: 5 },
    { name: 'Trasporti/Logistica', value: 5 },
    { name: 'Carta/Stampa/Editoria', value: 4 },
    { name: 'Nautico', value: 2 },
    { name: 'Vetro/Ceramica/Pietra', value: 2 },
    { name: 'Turismo/Ristorazione', value: 2 },
    { name: 'Aerospaziale', value: 1 }
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

      {/* Risultati principali Section */}
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
                  <div className="text-3xl font-bold text-blue-800">130</div>
                  <div className="text-sm text-gray-600">Assessment completati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">100%</div>
                  <div className="text-sm text-gray-600">Laboratori realizzati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">88.46%</div>
                  <div className="text-sm text-gray-600">delle imprese prevede di esplorare o adottare soluzioni AI nei prossimi 1-2 anni</div>
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
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                La maggior parte degli assessment è stata condotta nel territorio di Ravenna (26.92%, 35 aziende). Seguono Forlì-Cesena (11.54%, 15 aziende), Bologna e Rimini (entrambi 10%, 13 aziende ciascuno), Modena (9.23%, 12 aziende), Piacenza e Reggio Emilia (entrambi 8.46%, 11 aziende ciascuno), Imola e Parma (entrambi 7.69%, 10 aziende ciascuno), e Ferrara con nessun assessment condotto.
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
                I settori principali in cui operano le aziende sono la Metalmeccanica (21.54%, 28 aziende) e l&apos;Informatica/Consulenza (21.54%, 28 aziende). Seguono il settore "Altro" specificato (19.23%, 25 aziende), Costruzioni/Impiantistica (14.62%, 19 aziende) e Commercio (10.77%, 14 aziende).
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
                Secondo i dati raccolti, il 10.77% delle aziende non ha piani per adottare soluzioni di IA, mentre il 45.38% sta valutando possibili applicazioni. Inoltre, il 32.31% è in fase di sperimentazione o progetti pilota, il 10.77% ha già applicazioni operative in specifiche aree aziendali e solo lo 0.77% utilizza l&apos;IA in modo diffuso e integrato nei processi aziendali.
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
                I principali benefici attesi dall&apos;adozione dell&apos;IA sono l&apos;aumento di produttività ed efficienza dei processi (59.23%), il potenziamento delle attività di marketing e vendita (49.23%), l&apos;automazione di attività ripetitive e a basso valore aggiunto (36.15%), la riduzione dei costi operativi (32.31%) e il miglioramento della qualità di prodotti e servizi (30.77%).
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
              {/* Commento sotto il grafico */}
              <p className="mt-4 text-sm text-gray-600">
                Le aree di maggiore interesse per l&apos;utilizzo dell&apos;IA generativa sono la generazione di testi e contenuti (83.61%), la generazione di immagini e video (52.46%), la generazione di design e progetti (38.52%), la generazione di codice e software (31.15%) e la generazione di audio e musica (9.02%).
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
                Le principali sfide nell&apos;adozione dell&apos;IA sono la mancanza di conoscenza e comprensione delle opportunità offerte dall&apos;IA (57.27%), la difficoltà nell&apos;identificare i casi d&apos;uso e le applicazioni più rilevanti (49.09%), l&apos;incertezza sui benefici concreti dell&apos;IA per il business (44.55%), la mancanza di competenze interne per valutare e implementare soluzioni IA (38.18%) e le preoccupazioni sui costi e sui tempi di implementazione (19.09%).
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
                <div className="p-4 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Formazione</h3>
                  <p className="text-sm text-gray-600">68.46% richiede consulenza specifica e formazione su casi d&apos;uso AI</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Supporto finanziario</h3>
                  <p className="text-sm text-gray-600">40.0% interesse per bandi e finanziamenti per progetti AI</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Cultura del dato</h3>
                  <p className="text-sm text-gray-600">54.62% ha una cultura del dato parzialmente sviluppata</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Competenze</h3>
                  <p className="text-sm text-gray-600">88.92% necessita di sviluppare competenze interne specifiche</p>
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
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  • <span className="font-semibold">Alto potenziale di adozione:</span> 88.46% delle imprese interessate all&apos;AI nei prossimi 2 anni
                </p>
                <p className="text-sm text-gray-600">
                  • <span className="font-semibold">Necessità di supporto strutturato:</span> Focus su formazione, consulenza e finanziamenti
                </p>
                <p className="text-sm text-gray-600">
                  • <span className="font-semibold">Approccio graduale:</span> Partire da casi d&apos;uso concreti e ad alto impatto
                </p>
                <p className="text-sm text-gray-600">
                  • <span className="font-semibold">Sviluppo competenze:</span> Priorità alla creazione di know-how interno
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

    
      {/* Dettagli assessment Section */}
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
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">130 assessment completati</p>
                    <p className="text-sm text-gray-600">Mappatura approfondita dello stato di digitalizzazione e AI readiness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Laboratori realizzati</p>
                    <p className="text-sm text-gray-600">Dati non specificati</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">43.85% già attivo con l&apos;AI</p>
                    <p className="text-sm text-gray-600">32.31% in fase pilota, 10.77% con soluzioni operative, 0.77% integrata</p>
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
                  <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Efficienza operativa (59.23%)</p>
                    <p className="text-sm text-gray-600">Aumento produttività e ottimizzazione processi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Marketing e vendite (49.23%)</p>
                    <p className="text-sm text-gray-600">Potenziamento attività commerciali</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Automazione (36.15%)</p>
                    <p className="text-sm text-gray-600">Riduzione attività ripetitive</p>
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
                  <Book className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Gap di conoscenza (57.27%)</p>
                    <p className="text-sm text-gray-600">Mancanza di comprensione delle opportunità AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-semibold">Identificazione casi d&apos;uso (49.09%)</p>
                    <p className="text-sm text-gray-600">Difficoltà nell&apos;identificare applicazioni rilevanti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incertezza benefici (44.55%)</p>
                    <p className="text-sm text-gray-600">Difficoltà nella valutazione dei benefici concreti</p>
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
                    <p className="font-semibold">Consulenza specialistica (68.46%)</p>
                    <p className="text-sm text-gray-600">Supporto nell&apos;identificazione e implementazione casi d&apos;uso</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Formazione (56.15%)</p>
                    <p className="text-sm text-gray-600">Eventi informativi e formativi sull&apos;AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Finanziamenti (40.0%)</p>
                    <p className="text-sm text-gray-600">Supporto nell&apos;accesso a bandi e incentivi</p>
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
                    <p className="font-semibold">Alto interesse (88.46%)</p>
                    <p className="text-sm text-gray-600">Previsione di adozione AI nei prossimi 1-2 anni</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Ambizione di base (67.69%)</p>
                    <p className="text-sm text-gray-600">Focus su applicazioni di supporto ai processi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">Innovazione (26.15%)</p>
                    <p className="text-sm text-gray-600">Aspirazione a leadership e innovazione tramite AI</p>
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
                    <p className="text-sm text-gray-600">Programmi di sviluppo competenze AI personalizzati</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Approccio graduale</p>
                    <p className="text-sm text-gray-600">Implementazione step-by-step partendo da casi d&apos;uso concreti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Supporto di sistema</p>
                    <p className="text-sm text-gray-600">Coordinamento regionale per massimizzare efficacia interventi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incentivi mirati</p>
                    <p className="text-sm text-gray-600">Facilitare accesso a finanziamenti per progetti AI</p>
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
