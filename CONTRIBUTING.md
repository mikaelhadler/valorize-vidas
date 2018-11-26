# Contribuição

Sugestões e pull request são sempre bem vindos!

## Fluxo de trabalho

Faça um fork do projeto original para que você possa trabalhar em um repositório próprio.

Feito isto, vamos clonar o projeto:

```sh
git clone https://github.com/valorizevidas/valorize-vidas.git
cd valorize-vidas
npm install
```

## Trabalhe sua feature baseado na branch 'develop' conforme sugere o fluxo de Git Flow.
```
git fetch origin develop && git checkout develop
git checkout -b feature/minha-feature

```

Após ter trabalhado na sua feature, atualize a branch develop para se certificar de que está com a branch atualizada:
```
git pull origin develop
```

Feito isto, vamos mesclar as atualizações com a nossa feature branch:
```
git merge develop
```

Caso tenha conflitos, resolva e faça a submissão de sua branch.
