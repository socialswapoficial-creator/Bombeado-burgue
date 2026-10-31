# Boi Bread Burguer

Site de apresentação e cardápio digital da Boi Bread Burguer, em Recife. Interface em português, com identidade visual preta e dourada, história da hamburgueria, localização, vídeos, catálogo com categorias, bebidas e sacola com adicionais.

## Abrir localmente

O projeto usa HTML, CSS e JavaScript, sem etapa de build e sem dependências externas de execução.

```sh
python3 -m http.server 8000 --directory dist
```

Acesse http://localhost:8000.

## Verificações

Com Node.js instalado:

```sh
node tests/navigation.test.cjs
node tests/customizations.test.cjs
node tests/photos.test.cjs
node tests/motion.test.cjs
```

## Estrutura

- `dist/`: site completo, pronto para hospedagem estática.
- `dist/assets/`: fotografias, imagens ilustrativas e vídeos.
- `dist/app.js`: catálogo, navegação, personalização de produtos e sacola local.
- `dist/addons.js`: grupos de adicionais e regras por produto.
- `dist/photos.js`: associação das fotos aos produtos.
- `dist/motion.js` e `dist/motion.css`: animações ao rolar, com redução de movimento.
- `tests/`: verificações dos principais comportamentos.
- Documentos Markdown e JSON: registros de conteúdo e imagens.

## Publicação

Configure a pasta de saída como `dist` em uma hospedagem estática. Não é necessário comando de build. A configuração existente de Sites está em `.openai/hosting.json`.

## Estado do projeto

Protótipo de frontend: a sacola fica no navegador e ainda não envia pedidos, calcula entrega ou recebe pagamentos. O WhatsApp oficial e o horário de sexta e sábado aguardam confirmação. Alguns produtos mantêm as fotos anteriores por falta de originais correspondentes; detalhes em `PRODUCT-PHOTOS.md`. Preços e disponibilidade devem ser confirmados com a loja antes do lançamento comercial.

Versão de origem: `5db777733b8c22d8cdbb6c16046c094b423c0a56`.
