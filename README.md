# Análise Comparativa de Algoritmos de Ordenação

Este projeto realiza uma análise comparativa entre diferentes implementações do algoritmo QuickSort, incluindo versões híbridas com otimizações.

## 📁 Estrutura do Projeto

```
paa1/
├── algoritmos/           # Implementações dos algoritmos
│   ├── quicksort-recursivo.js
│   ├── quicksort-hibrido.js
│   └── quicksort-hibrido-mediana.js
└── testes/              # Scripts de teste e dados
    ├── testes-gerais.js
    ├── gerador-aleatorio-teste.js
    ├── valor-empirico-m.js
    └── valores-estruturados.js
```

## 🚀 Algoritmos Implementados

### 1. QuickSort Recursivo (`quicksort-recursivo.js`)
- Implementação clássica do QuickSort
- Usa o último elemento como pivô
- Algoritmo de referência para comparação

### 2. QuickSort Híbrido Simples (`quicksort-hibrido.js`)
- Combina QuickSort com Insertion Sort
- Usa threshold M=10 para determinar quando usar Insertion Sort
- Otimização para arrays pequenos

### 3. QuickSort Híbrido com Mediana (`quicksort-hibrido-mediana.js`)
- Versão mais eficiente do híbrido
- Usa mediana de três elementos para escolha do pivô
- Combina QuickSort + Insertion Sort + otimização de pivô

## 🧪 Como Executar os Testes

### Teste Principal
O arquivo `testes-gerais.js` é o principal script para obter dados comparativos:

```bash
# Execução normal
node testes-gerais.js

# Se houver problemas de stack size (ajuste conforme necessário)
node --stack_size=14000 testes-gerais.js
```

**Resultado:** Gera o arquivo `results_large.csv` com dados de performance de todos os algoritmos.

### Outros Scripts de Teste

#### Gerador de Dados Aleatórios
```bash
node gerador-aleatorio-teste.js
```
Gera arrays aleatórios para testes.

#### Determinação do Valor M
```bash
node valor-empirico-m.js
```
Analisa diferentes valores de threshold para otimizar o ponto de transição entre QuickSort e Insertion Sort.

## 📊 Dados de Teste

O projeto inclui diferentes tipos de arrays para teste:
- **Arrays aleatórios** de diferentes tamanhos
- **Arrays ordenados** (crescente e decrescente)
- **Arrays com repetições**
- **Arrays grandes** (1M e 10M elementos)

## 📈 Métricas Analisadas

Para cada algoritmo, são coletadas as seguintes métricas:
- **Comparações**: Número de comparações realizadas
- **Trocas**: Número de operações de swap
- **Operações totais**: Soma de comparações + trocas
- **Tempo de execução**: Tempo em milissegundos

## 🔧 Configurações

- **Threshold (M)**: 10 (valor empírico determinado)
- **Número de execuções**: 10 por algoritmo/array
- **Garbage Collection**: Ativado para limpeza de memória

## 📋 Resultados

Os resultados são salvos em formato CSV com as seguintes colunas:
- Array, Run, Algorithm, Size, Threshold, Comparisons, Swaps, Ops, TimeMs

## 🎯 Objetivo

Este projeto visa demonstrar a eficiência das otimizações do QuickSort:
1. **Hibridização** com Insertion Sort para arrays pequenos
2. **Escolha inteligente de pivô** usando mediana de três
3. **Análise empírica** do valor ótimo de threshold

A comparação permite avaliar o impacto de cada otimização na performance geral dos algoritmos.
"# quicksort" 
