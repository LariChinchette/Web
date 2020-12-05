class ElnarhisScene extends Phaser.Scene {
    constructor() {
        super('ElnarhisScene');
    }

    preload(){
        this.load.image('sprite', '../Midia/ElnarhisSprite.png');
        this.load.image('fundo', '../Midia/Village.png');
        this.load.image('grid', '../Midia/GridFalasSprite.png');
    }

    create(){
        //construindo cena
        this.add.image(400, 165, 'fundo');
        this.add.image(750, 300, 'sprite');
        this.add.image(440, 425, 'grid');

        //criando textos
        this.add.text(30, 363, 'Elnarhis', {}); //nome do personagem
        characterSays = this.add.text(155, 365, '',
            { wordWrap: { width: 700 } }); //onde fica o que o personagem está falando

        awnserA = this.add.text(35, 430, 'Clique em qualquer opção pra avançar', {}); //possibilidade de resposta A
        awnserB = this.add.text(35, 455, '', {}); //possibilidade de resposta B
        awnserC = this.add.text(35, 480, '', {}); //possibilidade de resposta C

        //Criando botões
        //Quando clicados esses botões iniciam o método de diálogo...
        const buttonA = this.add.text(10, 430, 'A', {}); //botão para escolher A
        buttonA.setInteractive();
        buttonA.on('pointerdown', () => { this.dialogTree(1); });

        const buttonB = this.add.text(10, 455, 'B', {}); //botão para escolher B
        buttonB.setInteractive();
        buttonB.on('pointerdown', () => { this.dialogTree(2); });

        const buttonC = this.add.text(10, 480, 'C', {}); //botão para escolher C
        buttonC.setInteractive();
        buttonC.on('pointerdown', () => { this.dialogTree(3); });

        if(actualDialog== 9){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+relationshipStatus+'/100 !!');
        }
    }

    update(){

    }

    dialogTree(){

    }

}