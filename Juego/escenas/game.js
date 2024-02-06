export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' })
        
    }

    preload() {
        this.load.image('pelota', '../imagenes/pelota.png');
        this.load.image('this.jugador1', '../imagenes/paddle.png');        
        this.load.image('this.jugador2', '../imagenes/paddle.png');
    }
        
    create() {
        let openingText;
        let player, pelota, cursors;

        let gameStarted = false;
        let  jugador1, jugador2;
        pelota = this.physics.add.sprite(
            this.physics.world.bounds.width / 2,
            this.physics.world.bounds.height / 2,
            'pelota'
        );
        pelota.setVisible(false);
        this.jugador1 = this.physics.add.sprite(
            this.physics.world.bounds.width - (pelota.width / 2 + 1),
            this.physics.world.bounds.height / 2,
            'paddle',
        );

        this.jugador2 = this.physics.add.sprite(
            (pelota.width / 2 + 1),
            this.physics.world.bounds.height / 2,
            'paddle',
        );
        this.cursors = this.input.keyboard.createCursorKeys();
       

        this.jugador1.setCollideWorldBounds(true);
        this.jugador2.setCollideWorldBounds(true);
        pelota.setCollideWorldBounds(true);
        pelota.setBounce(1, 1);
        this.jugador1.setImmovable(true);
        this.jugador2.setImmovable(true);
        this.physics.add.collider(pelota, this.jugador1, null, null, this);
        this.physics.add.collider(pelota, this.jugador2, null, null, this);

        openingText = this.add.text(
            this.physics.world.bounds.width / 2,
            this.physics.world.bounds.height / 2,
            'Press SPACE to Start',
            {
                fontFamily: 'Monaco, Courier, monospace',
                fontSize: '50px',
                fill: '#fff'
            });
        openingText.setOrigin(0.5);


        jugador1 = this.add.text(
            this.physics.world.bounds.width / 2,
            this.physics.world.bounds.height / 2,
            'Point for player 1!',
            {
                fontFamily: 'Monaco, Courier, monospace',
                fontSize: '50px',
                fill: '#fff'
            }
        );

        jugador1.setOrigin(0.5);

        jugador1.setVisible(false);

        jugador2 = this.add.text(
            this.physics.world.bounds.width / 2,
            this.physics.world.bounds.height / 2,
            'Point for player 2!',
            {
                fontFamily: 'Monaco, Courier, monospace',
                fontSize: '50px',
                fill: '#fff'
            }
        );

        jugador2.setOrigin(0.5);
        jugador2.setVisible(false);
        }
    update(){
        let gameStarted = false;
        const keys = {};
        keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    
        this.jugador1.setVelocityY(0);
        this.jugador2.setVelocityY(0);
        if (this.pelota.x < 500) {
            jugador1.setVisible(true);
            pelota.disableBody(true, true);
            return;
        }
        if (this.pelota.x > 500) {
            jugador2.setVisible(true);
            pelota.disableBody(true, true);
            return;
        }
        if (this.cursors.up.isDown) {
            this.jugador1.setVelocityY(-350);
        } else if (this.cursors.down.isDown) {
            this.jugador1.setVelocityY(350);
        }
    
        
        if (keys.w.isDown) {
            this.jugador2.setVelocityY(-350);
        } else if (keys.s.isDown) {
            this.jugador2.setVelocityY(350);
        }
    
    
        if (!gameStarted) {
            if (this.cursors.space.isDown) {
                this.pelota.setVisible(true);
                gameStarted = true;
                const initialXSpeed = Math.random() * 200 + 50;
                const initialYSpeed = Math.random() * 200 + 50;
                pelota.setVelocityX(initialXSpeed);
                pelota.setVelocityY(initialYSpeed);
                openingText.setVisible(false);
            }
        }
    }
    
}
