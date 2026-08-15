const produtosSaDelicias = [
    // --- SALGADOS ---
    {
        id: 10,
        nome: "Salgados Variados (Dúzia)",
        categoria: "salgados",
        descricao: "Salgados artesanais fritos e assados no ponto para a sua festa ou evento. Escolha a opção desejada por dúzia.",
        precoBase: 350,
        imagens: [
            "imagens/salgados1.jpeg",
            "imagens/salgados2.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Chamuças de Carne (Dúzia)", preco: 350 },
                { nome: "Chamuças de Frango (Dúzia)", preco: 350 },
                { nome: "Chamuças de Peixe / Caranguejo (Dúzia)", preco: 350 },
                { nome: "Ressóis de Camarão (Dúzia)", preco: 350 },
                { nome: "Almofadinhas de Frango e Queijo (Dúzia)", preco: 350 },
                { nome: "Mini Pizzas (Dúzia)", preco: 450 }
            ]
        }
    },

    // --- BOLOS DE ANIVERSÁRIO, CASAMENTO E BATIZADO ---
    {
        id: 1,
        nome: "Bolos Festivos (Aniversário, Batizado e Casamento)",
        categoria: "bolos",
        descricao: "Especialidade na fabricação de bolos personalizados para aniversários, batizados e casamentos. Selecione a forma/tamanho desejado.",
        precoBase: 1350,
        imagens: [
            "imagens/bolo1.jpeg",
            "imagens/bolo2.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Forma F18", preco: 1350 },
                { nome: "Forma F20", preco: 1500 },
                { nome: "Forma F22", preco: 2500 },
                { nome: "Forma F26", preco: 3000 },
                { nome: "Forma F30", preco: 3500 },
                { nome: "Bolo de Andares (Casamento / Batizado)", preco: 0 }
            ]
        }
    },

    // --- BOLOS CASEIROS ---
    {
        id: 2,
        nome: "Bolos Caseiros Artesanais",
        categoria: "bolos",
        descricao: "Bolos caseiros fofinhos e frescos, perfeitos para o seu café da manhã ou lanche da tarde.",
        precoBase: 0, // Sob Consulta
        imagens: [
            "imagens/caseiro1.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Bolo Caseiro de Laranja", preco: 0 },
                { nome: "Bolo Caseiro de Chocolate", preco: 0 },
                { nome: "Bolo Caseiro de Maracujá", preco: 0 },
                { nome: "Bolo Caseiro Simples", preco: 0 }
            ]
        }
    },

    // --- SOBREMESAS ---
    {
        id: 20,
        nome: "Sobremesas Variadas",
        categoria: "sobremesas",
        descricao: "Sobremesas deliciosas para adoçar as suas comemorações.",
        precoBase: 1000,
        imagens: [
            "imagens/sobremesa1.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Colchão de Noiva (Dúzia)", preco: 1000 },
                { nome: "Mini Pudim (Dúzia)", preco: 1500 },
                { nome: "Mousse de Chocolate (Dúzia)", preco: 1500 },
                { nome: "Mousse de Maracujá (Dúzia)", preco: 1500 }
            ]
        }
    }
];