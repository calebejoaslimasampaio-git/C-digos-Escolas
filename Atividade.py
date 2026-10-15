# ## Atividade de POO em python do dia 15/10/26
# ## 1 Questão
# class veiculo:
#     total_veiculos = 0
#     def __init__(self, marca, modelo,ano):

#         self.marca = marca
#         self.modelo = modelo
#         self.ano = ano

#         veiculo.total_veiculos += 1

#     def descricao(self):
#         print('A descrisão do veiculo é:')
#         print(f'A marca é: {self.marca}')
#         print(f'A modelo é: {self.modelo}')
#         print(f'A ano é: {self.ano}')
    

# print('cadastrando veiculo...')

# marca_user = input('Insira a marca de seu carro \n -->')
# modelo_user = input('Insira o modelo de seu carro \n -->')
# ano_user = input('Insira o ano de fabricação de seu carro \n -->')


# meu_veiculo = veiculo(marca_user,modelo_user,ano_user)
# print('Resultados:')
# # print(f'A descrição é: {meu_veiculo.descricao()}')
# print(f'O total de veiculos é: {veiculo.total_veiculos}')


##2 Questao


class aluno:

    def __int__ (self,nome,matricula,nota_final):
         self.nome = nome
         self.matricula = matricula
         self.nota_final = nota_final


    def exibir_dados(self):
        print(f"O nome do(a) aluno(a) é: {self.nome}")
        print(f"A matrícula do(a) aluno(a) é: {self.matricula}")
        print(f"A nota final do(a) aluno(a) é: {self.nota_final}")
              
    def verificar_aprovacao(self):
        if self.nota_final >= 6:
            print("Aprovado,por enquanto...")
        else:
            print('Reprovado')



aluno1 = aluno('Calebe',90028922,10)
aluno1.exibir_dados()
aluno1.verificar_aprovacao()



