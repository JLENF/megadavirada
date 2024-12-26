# 🍀 Mega Sena da Virada - Gerador Numerológico

Um aplicativo web moderno que gera números para a Mega Sena da Virada usando princípios avançados de numerologia e cálculos personalizados baseados em dados pessoais.

## ✨ Funcionalidades

- **Geração Aleatória**: Gere números completamente aleatórios
- **Geração Numerológica**: Gere números baseados em:
  - Nome completo (Número de Expressão)
  - Data de nascimento (Número do Destino)
  - Número do Ano Pessoal
  - Número do Caminho de Vida
  - Números Mestres (11, 22, 33)
  - Números Kármicos (13, 14, 16, 19)
  - Energia do dia atual

## 🚀 Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite
- Docker
- Nginx

## 📦 Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Docker e Docker Compose (para execução em container)

## 🛠️ Instalação

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar em modo desenvolvimento
npm run dev
```

### Usando Docker

```bash
# Construir e iniciar os containers
docker-compose up -d

# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f
```

## 🌐 Acesso

- Desenvolvimento local: http://localhost:5173
- Container Docker: http://localhost

## 🧮 Algoritmo Numerológico

O sistema utiliza um algoritmo sofisticado que combina:

1. **Sistema Pitagórico**: Para cálculo dos valores das letras do nome
2. **Números Mestres**: 11, 22 e 33 são preservados sem redução
3. **Números Kármicos**: Utilizados como sementes adicionais
4. **Energia Temporal**: Incorpora a energia do dia atual
5. **Cálculos Multi-dimensionais**: Combina diferentes aspectos numerológicos

## 🔧 Estrutura do Projeto

```
project/
├── src/
│   ├── components/
│   │   ├── NumberDisplay.tsx
│   │   └── NumerologyForm.tsx
│   ├── utils/
│   │   ├── numberGenerator.ts
│   │   └── numerologyUtils.ts
│   ├── App.tsx
│   └── main.tsx
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔮 Observação Importante

Este aplicativo é apenas para fins de entretenimento. Os números gerados são baseados em cálculos numerológicos e matemáticos, mas não garantem qualquer resultado em sorteios reais. Porém, se ganhar, seja feliz! 🎉
