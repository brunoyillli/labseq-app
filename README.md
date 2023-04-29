
<h1 align="center">
    labseq-app
</h1>

<h3>
 instruções para criar o container da aplicação pelo docker
</h3>

use o seguinte comando para gerar a imagem docker: sudo docker build -t labseq-app .

então dê o seguinte comnando para gerar o container e subir a aplicação: sudo docker run --name labseq-app -p 4200:80 labseq-app:latest

Para ver os logs para executar no terminal

docker logs labseq-app

Caso queira parar a aplicação basta executar

docker stop labseq-app

Ou, caso queira iniciar novamente basta executar

docker start labseq-api
