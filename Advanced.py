#criado no dia 24/09(anotações de funcão e metodos )

# def soma(a,b=0):
#     return a+b
# resultado=soma(3,5)
# resultado=soma(3)

# o def sozinho faz uma ação,mas com o __init__ define 
# class controleRemoto:
#     def __init__(self):
#         self.cor='preto'
#         self.altura='10cm'
#         self.profundidade='2cm'
#         self.largura='2cm'
# controle1 = controleRemoto()
# controle2 = controleRemoto()

#pode deixar com que o usuario altere tais atributos(personalização)




class ControleRemoto:
    def __init__(self,valor_da_cor,altura,profundidade):
        self.cor = valor_da_cor
        self.altura = altura
        self.profundidade = profundidade
        self.largura = "2cm"

    def passar_canal(self,botao):
        if botao == "+":
            print ("aumentar o canal")
        elif botao == '-':
            print("diminuir o canal")
controle1 = controleRemoto("preto","0.6","0.6")
print(controle1.largura)
controle1.passar_canal("+")