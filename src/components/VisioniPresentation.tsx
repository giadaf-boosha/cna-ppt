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

// Importiamo SOLO le icone realmente esistenti in lucide-react
// ed effettivamente usate nel componente
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
  ArrowUpRight,
  Book,
  Banknote
  // Se serve, puoi importare anche MessageSquare, se davvero lo usi:
  // MessageSquare
} from 'lucide-react';

const VisioniPresentation = () => {
  const [activeSection, setActiveSection] = useState<'results' | 'details' | 'innovation'>('results');

  // Esempio di palette colori per eventuali grafici a torta
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

  // ===========================
  // Dati d'esempio (aggiornati)
  // ===========================

  // Esempio: distribuzione assessment nei territori
  const assessmentDistribution = [
    { name: 'Ravenna', value: 35 },
    { name: 'Forlì-Cesena', value: 15 },
    { name: 'Rimini', value: 14 },
    { name: 'Bologna', value: 13 },
    { name: 'Modena', value: 12 },
    { name: 'Piacenza', value: 11 },
    { name: 'Reggio Emilia', value: 11 },
    { name: 'Ferrara', value: 10 },
    { name: 'Imola', value: 10 },
    { name: 'Parma', value: 10 }
  ];

  // Esempio: settori di attività
  const companySectors = [
    { name: 'Metalmeccanica', value: 31 },
    { name: 'Informatica/Consulenza', value: 29 },
    { name: 'Altro', value: 28 },
    { name: 'Costruzioni/Impiantistica', value: 19 },
    { name: 'Commercio', value: 15 }
    // ecc.
  ];

  // Esempio: stato adozione IA
  const adoptionStatus = [
    { name: 'Non pianificata', value: 10.64 },
    { name: 'In valutazione', value: 45.39 },
    { name: 'Progetti pilota', value: 30.50 },
    { name: 'Operativa', value: 12.77 },
    { name: 'Integrata', value: 0.71 }
  ];

  // Esempio: benefici attesi
  const expectedBenefits = [
    { name: 'Produttività', value: 58.87 },
    { name: 'Marketing', value: 48.23 },
    { name: 'Automazione', value: 34.75 },
    { name: 'Qualità prodotti', value: 31.21 },
    { name: 'Riduzione costi', value: 29.79 }
  ];

  // Esempio: IA generativa
  const aiApplications = [
    { name: 'Gen. contenuti', value: 80.45 },
    { name: 'Gen. immagini', value: 53.38 },
    { name: 'Design progetti', value: 37.59 },
    { name: 'Gen. codice', value: 29.32 },
    { name: 'Gen. audio', value: 9.02 }
  ];

  // Esempio: sfide implementative
  const implementationChallenges = [
    { name: 'Mancanza conoscenza', value: 57.76 },
    { name: 'Identificazione casi uso', value: 48.28 },
    { name: 'Incertezza benefici', value: 43.97 },
    { name: 'Mancanza competenze', value: 40.52 },
    { name: 'Costi implementazione', value: 18.97 }
  ];

  // Sezione "details" - dati fittizi come esempio
  const totalAssessments = 141;
  const alreadyActivePercentage = 44.0; // somma di progetti pilota + operative + integrate
  const detailsBenefitsData = [
    { label: 'Efficienza operativa', value: 58.87 },
    { label: 'Marketing e vendite', value: 48.23 },
    { label: 'Automazione', value: 34.75 }
  ];
  const detailsBarriersData = [
    { label: 'Gap di conoscenza', value: 57.76 },
    { label: 'Identificazione casi d’uso', value: 48.28 },
    { label: 'Incertezza benefici', value: 43.97 }
  ];
  const supportNeeds = {
    expertConsulting: 68.79,
    trainingEvents: 58.16,
    fundingSupport: 39.01
  };
  const futureProspects = {
    highInterest: 87.76,
    baseAmbition: 65.96,
    innovationAspirations: 26.95
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* TABS DI NAVIGAZIONE */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'results' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('results')}
        >
          Risultati principali
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'details' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('details')}
        >
          Dettagli assessment
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === 'innovation' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('innovation')}
        >
          Innovazione sistemica
        </button>
      </div>

      {/* =========================
          SEZIONE: RISULTATI
      ========================= */}
      {activeSection === 'results' && (
        <div className="space-y-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800">
                Progetto Visioni Interconnesse: analisi approfondita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">{totalAssessments}</div>
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

          {/* Distribuzione Assessment */}
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
                La maggior parte degli assessment è stata condotta a Ravenna (24,82%, 35 aziende). Seguono Forlì-Cesena (10,64%), Rimini (9,93%), ecc.
              </p>
            </CardContent>
          </Card>

          {/* Principali settori */}
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
                I settori principali risultano essere la Metalmeccanica (31 aziende), l’Informatica/Consulenza (29), ecc.
              </p>
            </CardContent>
          </Card>

          {/* Stato adozione AI */}
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
                      {adoptionStatus.map((entry, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Circa il 10,64% non pianifica l'adozione di IA, il 45,39% la sta valutando, ecc.
              </p>
            </CardContent>
          </Card>

          {/* Benefici attesi */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Benefici attesi dall’AI
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
                I principali benefici attesi includono l’aumento di produttività (58,87%) e il potenziamento di marketing/vendite (48,23%).
              </p>
            </CardContent>
          </Card>

          {/* AI generativa */}
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
                Le aree di maggior interesse: generazione di testi (80,45%), immagini (53,38%), progetti/design (37,59%), e così via.
              </p>
            </CardContent>
          </Card>

          {/* Sfide */}
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
                Le principali barriere all’adozione dell’IA includono la mancanza di conoscenze (57,76%) e la difficoltà d’identificazione dei casi d’uso (48,28%).
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* =========================
          SEZIONE: DETTAGLI
      ========================= */}
      {activeSection === 'details' && (
        <div className="space-y-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Stato attuale dell’adozione AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">{totalAssessments} assessment completati</p>
                    <p className="text-sm text-gray-600">
                      Panoramica approfondita sul livello di digitalizzazione e IA readiness
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Laboratori realizzati</p>
                    <p className="text-sm text-gray-600">
                      Completato il 100% degli incontri e delle sessioni formative previste
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">{alreadyActivePercentage}% di aziende attive</p>
                    <p className="text-sm text-gray-600">
                      30,50% in progetti pilota, 12,77% con soluzioni operative, 0,71% integrate
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
              {detailsBenefitsData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 mb-3">
                  <Book className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">{item.label} ({item.value}%)</p>
                    <p className="text-sm text-gray-600">
                      {item.label === 'Efficienza operativa'
                        ? 'Riduzione tempi, costi e ottimizzazione processi.'
                        : item.label === 'Marketing e vendite'
                        ? 'Potenziamento strategie commerciali e targeting.'
                        : 'Automazione di compiti ripetitivi e a basso valore.'}
                    </p>
                  </div>
                </div>
              ))}
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
              {detailsBarriersData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 mb-3">
                  <Book className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">
                      {item.label} ({item.value}%)
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.label === 'Gap di conoscenza'
                        ? 'Carente consapevolezza delle opportunità IA.'
                        : item.label === 'Identificazione casi d’uso'
                        ? 'Fatica nel trovare applicazioni concrete e prioritarie.'
                        : 'Incertezza sui benefici tangibili e sul ROI.'}
                    </p>
                  </div>
                </div>
              ))}
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
                      Identificare e implementare i casi d’uso IA più promettenti.
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
                      Workshop, corsi e training on the job dedicati ai temi IA.
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
                      Supporto per l’accesso a bandi, agevolazioni fiscali e fondi pubblici.
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
                      Adozione IA prevista nei prossimi 1-2 anni
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
                      Puntare a soluzioni di supporto ai processi core
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
                      Diventare leader e trasformare il modello di business
                    </p>
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
