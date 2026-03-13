'use client'

import { useState } from 'react'
import { 
  Church, 
  Calendar, 
  FileText, 
  Bell, 
  BookOpen, 
  Cross,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  ChevronRight,
  Settings,
  Home
} from 'lucide-react'
import Link from 'next/link'

type Section = 'dashboard' | 'avisos' | 'eventos' | 'blog' | 'liturgia' | 'santo'

interface Aviso {
  id: number
  title: string
  content: string
  date: string
  active: boolean
}

interface Evento {
  id: number
  title: string
  date: string
  location: string
  description: string
}

const sidebarItems = [
  { id: 'dashboard' as Section, label: 'Dashboard', icon: Home },
  { id: 'avisos' as Section, label: 'Avisos', icon: Bell },
  { id: 'eventos' as Section, label: 'Eventos', icon: Calendar },
  { id: 'blog' as Section, label: 'Blog/Formação', icon: FileText },
  { id: 'liturgia' as Section, label: 'Liturgia', icon: BookOpen },
  { id: 'santo' as Section, label: 'Santo do Dia', icon: Cross },
]

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')
  const [avisos, setAvisos] = useState<Aviso[]>([
    { id: 1, title: 'Horário especial de Carnaval', content: 'Durante o Carnaval, as missas serão às 7h e 19h.', date: '2026-02-10', active: true },
    { id: 2, title: 'Inscrições para Catequese', content: 'Abertas as inscrições para catequese 2026.', date: '2026-01-15', active: true },
  ])
  const [eventos, setEventos] = useState<Evento[]>([
    { id: 1, title: 'Festa de São Paulo', date: '2026-01-25', location: 'Igreja Matriz', description: 'Celebração solene às 19h' },
    { id: 2, title: 'Retiro Quaresmal', date: '2026-02-10', location: 'Salão Paroquial', description: 'Das 8h às 17h' },
  ])
  const [editingAviso, setEditingAviso] = useState<Aviso | null>(null)
  const [editingEvento, setEditingEvento] = useState<Evento | null>(null)
  
  const [liturgia, setLiturgia] = useState({
    date: 'Segunda-feira da 2ª Semana do Tempo Comum',
    color: 'Verde',
    firstReading: '1Sm 15,16-23',
    psalm: 'Sl 49(50)',
    gospel: 'Mc 2,18-22',
  })
  
  const [santo, setSanto] = useState({
    name: 'São Sebastião',
    title: 'Mártir',
    description: 'Oficial do exército romano, martirizado durante a perseguição de Diocleciano.',
    feast: '20 de Janeiro',
  })
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Church className="h-8 w-8 text-primary" />
            <div>
              <p className="font-serif text-lg text-foreground">Admin</p>
              <p className="text-xs text-muted-foreground">Paróquia SPSP</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors ${
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Voltar ao site
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Dashboard */}
        {activeSection === 'dashboard' && (
          <div>
            <h1 className="font-serif text-3xl text-foreground mb-8">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Avisos Ativos', value: avisos.filter(a => a.active).length, icon: Bell },
                { label: 'Eventos Próximos', value: eventos.length, icon: Calendar },
                { label: 'Posts no Blog', value: 12, icon: FileText },
                { label: 'Pedidos de Oração', value: 45, icon: Cross },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded">
                  <stat.icon className="h-8 w-8 text-primary/70 mb-4" />
                  <p className="text-3xl font-serif text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded">
                <h2 className="font-serif text-xl text-foreground mb-4">Avisos Recentes</h2>
                <div className="space-y-3">
                  {avisos.slice(0, 3).map((aviso) => (
                    <div key={aviso.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                      <span className="text-foreground">{aviso.title}</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${aviso.active ? 'bg-green-500/20 text-green-400' : 'bg-secondary text-muted-foreground'}`}>
                        {aviso.active ? 'Ativo' : 'Inativo'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-card border border-border rounded">
                <h2 className="font-serif text-xl text-foreground mb-4">Próximos Eventos</h2>
                <div className="space-y-3">
                  {eventos.slice(0, 3).map((evento) => (
                    <div key={evento.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                      <span className="text-foreground">{evento.title}</span>
                      <span className="text-sm text-muted-foreground">{evento.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Avisos */}
        {activeSection === 'avisos' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-serif text-3xl text-foreground">Avisos Paroquiais</h1>
              <button
                onClick={() => setEditingAviso({ id: 0, title: '', content: '', date: '', active: true })}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Novo Aviso
              </button>
            </div>
            
            {editingAviso && (
              <div className="mb-8 p-6 bg-card border border-border rounded">
                <h2 className="font-serif text-xl text-foreground mb-4">
                  {editingAviso.id === 0 ? 'Novo Aviso' : 'Editar Aviso'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-foreground mb-2">Título</label>
                    <input
                      type="text"
                      value={editingAviso.title}
                      onChange={(e) => setEditingAviso({ ...editingAviso, title: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">Conteúdo</label>
                    <textarea
                      rows={4}
                      value={editingAviso.content}
                      onChange={(e) => setEditingAviso({ ...editingAviso, content: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded text-foreground resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-foreground mb-2">Data</label>
                      <input
                        type="date"
                        value={editingAviso.date}
                        onChange={(e) => setEditingAviso({ ...editingAviso, date: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                      />
                    </div>
                    <div className="flex items-end">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editingAviso.active}
                          onChange={(e) => setEditingAviso({ ...editingAviso, active: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <span className="text-foreground">Ativo</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (editingAviso.id === 0) {
                          setAvisos([...avisos, { ...editingAviso, id: Date.now() }])
                        } else {
                          setAvisos(avisos.map(a => a.id === editingAviso.id ? editingAviso : a))
                        }
                        setEditingAviso(null)
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm"
                    >
                      <Save className="h-4 w-4" />
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingAviso(null)}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded text-sm"
                    >
                      <X className="h-4 w-4" />
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {avisos.map((aviso) => (
                <div key={aviso.id} className="p-6 bg-card border border-border rounded">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{aviso.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{aviso.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">{aviso.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs rounded ${aviso.active ? 'bg-green-500/20 text-green-400' : 'bg-secondary text-muted-foreground'}`}>
                        {aviso.active ? 'Ativo' : 'Inativo'}
                      </span>
                      <button
                        onClick={() => setEditingAviso(aviso)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setAvisos(avisos.filter(a => a.id !== aviso.id))}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Eventos */}
        {activeSection === 'eventos' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-serif text-3xl text-foreground">Eventos</h1>
              <button
                onClick={() => setEditingEvento({ id: 0, title: '', date: '', location: '', description: '' })}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Novo Evento
              </button>
            </div>
            
            {editingEvento && (
              <div className="mb-8 p-6 bg-card border border-border rounded">
                <h2 className="font-serif text-xl text-foreground mb-4">
                  {editingEvento.id === 0 ? 'Novo Evento' : 'Editar Evento'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-foreground mb-2">Título</label>
                    <input
                      type="text"
                      value={editingEvento.title}
                      onChange={(e) => setEditingEvento({ ...editingEvento, title: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-foreground mb-2">Data</label>
                      <input
                        type="date"
                        value={editingEvento.date}
                        onChange={(e) => setEditingEvento({ ...editingEvento, date: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground mb-2">Local</label>
                      <input
                        type="text"
                        value={editingEvento.location}
                        onChange={(e) => setEditingEvento({ ...editingEvento, location: e.target.value })}
                        className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">Descrição</label>
                    <textarea
                      rows={3}
                      value={editingEvento.description}
                      onChange={(e) => setEditingEvento({ ...editingEvento, description: e.target.value })}
                      className="w-full px-4 py-2 bg-background border border-border rounded text-foreground resize-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (editingEvento.id === 0) {
                          setEventos([...eventos, { ...editingEvento, id: Date.now() }])
                        } else {
                          setEventos(eventos.map(e => e.id === editingEvento.id ? editingEvento : e))
                        }
                        setEditingEvento(null)
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm"
                    >
                      <Save className="h-4 w-4" />
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingEvento(null)}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded text-sm"
                    >
                      <X className="h-4 w-4" />
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {eventos.map((evento) => (
                <div key={evento.id} className="p-6 bg-card border border-border rounded">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{evento.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{evento.description}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{evento.date}</span>
                        <span>{evento.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingEvento(evento)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setEventos(eventos.filter(e => e.id !== evento.id))}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Blog */}
        {activeSection === 'blog' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-serif text-3xl text-foreground">Blog / Formação</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors">
                <Plus className="h-4 w-4" />
                Novo Post
              </button>
            </div>
            
            <div className="p-12 bg-card border border-border rounded text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground">Editor de blog em desenvolvimento.</p>
              <p className="text-sm text-muted-foreground mt-2">Aqui você poderá criar e gerenciar artigos de formação.</p>
            </div>
          </div>
        )}
        
        {/* Liturgia */}
        {activeSection === 'liturgia' && (
          <div>
            <h1 className="font-serif text-3xl text-foreground mb-8">Liturgia do Dia</h1>
            
            <div className="p-6 bg-card border border-border rounded">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">Data Litúrgica</label>
                  <input
                    type="text"
                    value={liturgia.date}
                    onChange={(e) => setLiturgia({ ...liturgia, date: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Cor Litúrgica</label>
                  <select
                    value={liturgia.color}
                    onChange={(e) => setLiturgia({ ...liturgia, color: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  >
                    <option value="Verde">Verde</option>
                    <option value="Branco">Branco</option>
                    <option value="Roxo">Roxo</option>
                    <option value="Vermelho">Vermelho</option>
                    <option value="Rosa">Rosa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Primeira Leitura</label>
                  <input
                    type="text"
                    value={liturgia.firstReading}
                    onChange={(e) => setLiturgia({ ...liturgia, firstReading: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Salmo</label>
                  <input
                    type="text"
                    value={liturgia.psalm}
                    onChange={(e) => setLiturgia({ ...liturgia, psalm: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Evangelho</label>
                  <input
                    type="text"
                    value={liturgia.gospel}
                    onChange={(e) => setLiturgia({ ...liturgia, gospel: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
                  <Save className="h-4 w-4" />
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Santo do Dia */}
        {activeSection === 'santo' && (
          <div>
            <h1 className="font-serif text-3xl text-foreground mb-8">Santo do Dia</h1>
            
            <div className="p-6 bg-card border border-border rounded">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">Nome do Santo</label>
                  <input
                    type="text"
                    value={santo.name}
                    onChange={(e) => setSanto({ ...santo, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Título</label>
                  <input
                    type="text"
                    value={santo.title}
                    onChange={(e) => setSanto({ ...santo, title: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                    placeholder="Ex: Mártir, Doutor da Igreja, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Data da Festa</label>
                  <input
                    type="text"
                    value={santo.feast}
                    onChange={(e) => setSanto({ ...santo, feast: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Descrição</label>
                  <textarea
                    rows={4}
                    value={santo.description}
                    onChange={(e) => setSanto({ ...santo, description: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded text-foreground resize-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
                  <Save className="h-4 w-4" />
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
