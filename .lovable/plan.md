## Remover pilar "Energia Garantida" da seção PZF

1. Em `src/components/site/Pzf.tsx`:
   - Remover o item `{ icon: Radio, title: "Energia Garantida", description: "Linhas independentes e nobreak dedicado. Uma queda de energia não interrompe o seu evento." }` do array `pillars`.
   - Remover o import não utilizado `Radio` do `lucide-react`.
   - Ajustar o grid de pilares de `md:grid-cols-4` para `md:grid-cols-3`.