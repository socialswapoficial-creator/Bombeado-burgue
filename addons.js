// Options checked individually in the restaurant's MenuDino product forms.
// Prices are cents. A group is assigned only where it was observed.
const commonExtras=[['Bacon Crocante',400],['Cebola Caramelizada na Chapa',200],['Hamb. Frango 100G',900],['Hamb.Bovino 100G',1000],['Hamb.Calabresa 100G',900],['Hamb.Costela 160G',1500],['Hamb.Picanha 160G',1500],['Milho',200],['Ovo',200],['Queijo Coalho',400],['Queijo cheddar cremoso',400],['Queijo duplo fatia',400],['Salada',200],['Onion Rings',200],['Carne smash 90g',900]];
const sauces=[['Molho Barbecue 30ml',200],['Molho Secreto BBB 30ml',200],['Molho Mostarda e Mel 30ml',200],['Molho secreto de Churrasco 30ml',200]];
const ADDON_GROUPS={
 A:{title:'Turbine seu burger',min:0,max:10,type:'check',rule:'Opcional · Escolha até 10 opções',options:[['Bacon Crocante',400],['Cebola Caramelizada na Chapa',200],['Hamb. carne de sol 130G',1100],['Hamb. Frango 100G',900],['Hamb.Bovino 100G',1000],['Hamb.Calabresa 100G',900],['Hamb.Costela 160G',1500],['Hamb.Picanha 160G',1500],['Milho',200],['Molho Barbecue 30ml',200],['Molho Mostarda e Mel 30ml',200],['Molho Secreto BBB 30ml',200],['Molho secreto de Churrasco 30ml',200],['Onion Rings',200],['Ovo',200],['Queijo cheddar cremoso',400],['Queijo Coalho',400],['Queijo duplo fatia',400],['Salada',200]]},
 B:{title:'Deseja mais complementos?',min:0,max:11,type:'quantity',rule:'Opcional · Escolha até 11 opções',options:commonExtras},
 S:{title:'Deseja adicionar molho extra?',min:0,max:2,type:'quantity',rule:'Opcional · Escolha até 2 opções',options:sauces},
 D:{unavailable:[4,6,7],title:'Escolha sua bebida',min:1,max:1,type:'radio',rule:'Obrigatório · Escolha 1 bebida incluída no combo',options:['Coca Cola Lata','Antarctica Lata','Fanta Laranja Lata','Sprite Lata','Suco Laranja 300ml','Suco de Cajá 300ml','Suco Graviola polpa 300ml','Suco Limão 300ml','Suco de Morango 300ml','Coca Cola Zero Lata','Guaraná Antarctica Zero'].map(n=>[n,0])},
 P:{title:'Deseja turbinar sua batata?',min:0,max:2,maxUnits:2,type:'check',rule:'Opcional · Até 2 opções, totalizando até 2 itens',options:[['ADC bacon batata P',200],['ADC cheddar batata P',200]]}
};
const PRODUCT_CUSTOMIZATIONS={
 0:['A','S'],1:['A','S'],2:['A','S'],3:['A','S'],4:['B','S'],5:['A','S'],6:['A','S'],7:['B','S'],
 8:['B','S'],9:['B','S'],10:['B','S'],11:['B','S'],
 12:['D','P','B','S'],13:['D','P','B','S'],14:['D','P','B','S'],15:['D','P','B','S'],
 16:['D','P','B','S'],17:['D','P','B','S'],18:['D','P','B','S'],19:['D','B','S'],20:['D','P','B','S'],21:['D','B','S'],22:['D','B','S'],23:['D','A','S'],
 24:['B','S'],25:['B','S'],26:['D','B','S','P']
};
const BURGER_DESCRIPTIONS={
 0:'Pão brioche, carne bovina 100g, queijo derretido, bacon crocante, hambúrguer de frango 100g, ovo, alface, tomate, molho Secreto BBB e milho.',
 1:'Pão brioche, carne bovina 100g, queijo duplo derretido, cebola crispy, bacon em cubos e molho Secreto BBB.',
 2:'Pão brioche, hambúrguer de carne de sol 130g, queijo coalho, bacon crocante, cebola caramelizada, alface, tomate e molho Secreto BBB.',
 3:'Pão brioche, carne bovina 100g, cheddar cremoso, bacon crocante, cebola caramelizada e molho Secreto BBB.',
 4:'Pão brioche, hambúrguer bovino 100g, queijo derretido, alface, tomate e molho Secreto BBB.',
 5:'Pão brioche, hambúrguer de frango 100g, queijo derretido, ovo, alface, tomate, molho Secreto BBB e milho verde.',
 6:'Pão brioche, hambúrguer de calabresa 100g, queijo derretido, bacon crocante, cebola caramelizada, alface, tomate, molho Secreto BBB e barbecue.',
 7:'Pão brioche, carne bovina 100g, queijo derretido, ovo, alface, tomate e molho Secreto BBB.',
 8:'Pão brioche, carne bovina 90g prensada na chapa, queijo derretido e cebola caramelizada.',
 9:'Pão brioche, carne bovina 90g prensada na chapa, queijo derretido, bacon crocante e cebola caramelizada.',
 10:'Pão brioche, duas carnes bovinas de 90g cada prensadas na chapa, queijo duplo derretido e cebola caramelizada.',
 11:'Pão brioche, carne bovina 90g prensada na chapa, queijo derretido, cebola caramelizada, alface e tomate.',
 24:'Pão brioche amanteigado com gergelim misto, hambúrguer bovino 170g recheado com bacon, provolone chapeado, tiras de bacon, onion rings, geleia de abacaxi com hortelã e molho de churrasco Grill.',
 25:'Pão brioche amanteigado com gergelim misto, hambúrguer de picanha 120g, queijo derretido, bacon crocante, disco de cheddar com farofa de bacon empanado e molho Secreto BBB.',
 26:'Pão artesanal com gergelim, molho de churrasco defumado, carne de sol 130g, queijo manteiga, banana assada com canela e mel de engenho, bacon e onion rings.'
};
const TRIO_BASES={12:8,13:9,14:10,15:11,16:0,17:1,18:2,19:3,20:4,21:5,22:6,23:7};

// Retain legacy choice indices for saved bags; only morango and cajá juices are currently offered.
