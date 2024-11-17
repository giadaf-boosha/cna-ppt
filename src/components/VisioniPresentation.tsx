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
  PieChart as PieChartIcon
} from 'lucide-react';

const VisioniPresentation = () => {
  const [activeSection, setActiveSection] = useState('results'); // results, details, innovation

  const COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

  // Dati per i grafici aggiornati
  const adoptionStatus = [
    { name: 'Non pianificata', value: 9.91 },
    { name: 'In valutazione', value: 42.34 },
    { name: 'Progetti pilota', value: 35.14 },
    { name: 'Operativa', value: 11.71 },
    { name: 'Integrata', value: 0.9 }
  ];

  const expectedBenefits = [
    { name: 'Produttività', value: 61.26 },
    { name: 'Marketing', value: 48.65 },
    { name: 'Automazione', value: 36.94 },
    { name: 'Riduzione costi', value: 33.33 },
    { name: 'Qualità prodotti', value: 30.63 }
  ];

  const aiApplications = [
    { name: 'Gen. contenuti', value: 83.81 },
    { name: 'Gen. immagini', value: 52.38 },
    { name: 'Design progetti', value: 40.95 },
    { name: 'Gen. codice', value: 29.52 },
    { name: 'Gen. audio', value: 9.52 }
  ];

  const implementationChallenges = [
    { name: 'Mancanza conoscenza', value: 54.84 },
    { name: 'Incertezza benefici', value: 45.16 },
    { name: 'Identificazione casi uso', value: 46.24 },
    { name: 'Competenze interne', value: 36.56 },
    { name: 'Costi implementazione', value: 20.43 }
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
                  <div className="text-3xl font-bold text-blue-800">111</div>
                  <div className="text-sm text-gray-600">Assessment completati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">80%</div>
                  <div className="text-sm text-gray-600">Laboratori realizzati</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">89.19%</div>
                  <div className="text-sm text-gray-600">delle imprese prevede di esplorare o adottare soluzioni AI nei prossimi 1-2 anni</div>
                </div>
              </div>
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
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {adoptionStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
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
                  <p className="text-sm text-gray-600">70.27% richiede consulenza specifica e formazione su casi d&apos;uso AI</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Supporto finanziario</h3>
                  <p className="text-sm text-gray-600">45.05% interesse per bandi e finanziamenti per progetti AI</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Cultura del dato</h3>
                  <p className="text-sm text-gray-600">54.95% ha una cultura del dato parzialmente sviluppata</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold">Competenze</h3>
                  <p className="text-sm text-gray-600">84% necessita di sviluppare competenze interne specifiche</p>
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
                  • <span className="font-semibold">Alto potenziale di adozione:</span> 89.19% delle imprese interessate all&apos;AI nei prossimi 2 anni
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
                    <p className="font-semibold">111 assessment completati</p>
                    <p className="text-sm text-gray-600">Mappatura approfondita dello stato di digitalizzazione e AI readiness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">8 laboratori su 10 realizzati</p>
                    <p className="text-sm text-gray-600">Formazione pratica e hands-on sull&apos;utilizzo dell&apos;AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">47.75% già attivo con l&apos;AI</p>
                    <p className="text-sm text-gray-600">35.14% in fase pilota, 11.71% con soluzioni operative</p>
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
                    <p className="font-semibold">Efficienza operativa (61.26%)</p>
                    <p className="text-sm text-gray-600">Aumento produttività e ottimizzazione processi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Marketing e vendite (48.65%)</p>
                    <p className="text-sm text-gray-600">Potenziamento attività commerciali</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Automazione (36.94%)</p>
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
                    <p className="font-semibold">Gap di conoscenza (54.84%)</p>
                    <p className="text-sm text-gray-600">Mancanza di comprensione delle opportunità AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-semibold">Incertezza ROI (45.16%)</p>
                    <p className="text-sm text-gray-600">Difficoltà nella valutazione dei benefici concreti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">Use cases (46.24%)</p>
                    <p className="text-sm text-gray-600">Difficoltà nell&apos;identificare applicazioni rilevanti</p>
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
                    <p className="font-semibold">Consulenza specialistica (70.27%)</p>
                    <p className="text-sm text-gray-600">Supporto nell&apos;identificazione e implementazione casi d&apos;uso</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Formazione (52.25%)</p>
                    <p className="text-sm text-gray-600">Eventi informativi e formativi sull&apos;AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Finanziamenti (45.05%)</p>
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
                    <p className="font-semibold">Alto interesse (89.19%)</p>
                    <p className="text-sm text-gray-600">Previsione di adozione AI nei prossimi 1-2 anni</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold">Ambizione di base (67.57%)</p>
                    <p className="text-sm text-gray-600">Focus su applicazioni di supporto ai processi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold">Innovazione (24.33%)</p>
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
                <PieChartIcon className="w-6 h-6" />
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
