
# Validador de Duimp

Declaração Única de Importação (DUIMP) é o novo documento eletrônico no qual devem ser compiladas todas as informações de natureza aduaneira, administrativa, comercial, financeira, tributária e fiscal.

Lei de formação. O número da Duimp é composto por:
* 15 caracteres
* Formato: 'NNAANNNNNNNNNNN'
* NN = Corresponde ao ano do registro da Declaração.
* AA = Corresponde à sigla do país de emissão do documento (BR).
* NNNNNNNNNN = 10 caracteres númericos. Número sequencial da Duimp dentro do ano.
* N = 1 caracter númerico. 
* Digito Verificador para todos os demais caracteres numéricos (Módulo 11)
* Tamanho: 15

## Funcionalidade

- Validar o número de uma Duimp com base na Lei de formação
- Em caso de número inválido, mostrar o que está errado.


## Screenshots

![image](https://user-images.githubusercontent.com/41492692/192348551-48797dcc-2f4b-4535-a032-2d7ea4b7fb7d.png)
![image](https://user-images.githubusercontent.com/41492692/192348663-8712b6b9-de00-4301-a665-3f24855cee70.png)
![image](https://user-images.githubusercontent.com/41492692/192348733-8326ad77-753d-4dd8-9515-4b683a1ca913.png)
![image](https://user-images.githubusercontent.com/41492692/192348880-dbe02c51-387a-47bc-a922-dc31b438a4aa.png)
![image](https://user-images.githubusercontent.com/41492692/192349139-481a4db5-b7ec-42ee-a0d3-d20981de2297.png)



## Link do Site
[Validar Duimp](https://validar-duimp.netlify.app/)

## Stack utilizada

HTML, CSS, JAVASCRIPT
