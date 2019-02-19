export default class Level0 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level0'
        });
    }
    preload() {
        this.load.audio('slap', ['/assets/audio/slap.ogg']);
        this.load.audio('scream', ['/assets/audio/aargh1.ogg']);
        this.load.audio('scream1', ['/assets/audio/aargh0.ogg']);
        this.load.audio('scream2', ['/assets/audio/aargh2.ogg']);
        this.load.audio('scream3', ['/assets/audio/aargh3.ogg']);
        this.load.audio('scream4', ['/assets/audio/aargh4.ogg']);
        this.load.audio('scream5', ['/assets/audio/aargh5.ogg']);
        this.load.audio('scream6', ['/assets/audio/aargh6.ogg']);
        this.load.audio('scream7', ['/assets/audio/aargh7.ogg']);
        this.load.image('blank', '/assets/sprites/box_blank.png');
        this.load.image('legal', '/assets/sprites/face.png');
        this.load.image('illegal', '/assets/sprites/box_xblue.png');
        this.load.image('startbutton', '/assets/sprites/startbutton.png');
        this.load.image('hand', '/assets/sprites/hand.png');

        //google fonts
        this.load.script(
            'webfont',
            'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        );

        this.load.image('platform_tiles', '/assets/tiles/arcade_platformerV2-transparent.png');
        this.load.tilemapTiledJSON('map', '/assets/tiles/platformTiled.json');
    }
    create() {

        // var barConfig = { x: 200, y: 100 };
        // this.myHealthBar = new HealthBar(this.game, barConfig);

        const map = this.make.tilemap({
            key: 'map',
            tileWidth: 16,
            tileHeight: 16
        });

        this.slap = this.sound.add('slap');
        this.scream = this.sound.add('scream');
        this.scream1 = this.sound.add('scream1');
        this.scream2 = this.sound.add('scream2');
        this.scream3 = this.sound.add('scream3');
        this.scream4 = this.sound.add('scream4');
        this.scream5 = this.sound.add('scream5');
        this.scream6 = this.sound.add('scream6');
        this.scream7 = this.sound.add('scream7');

        const tileset = map.addTilesetImage('arcade_platformerV2', 'platform_tiles');
        const backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);

        // this.blank1 = this.add.image(50, 100, 'blank').setScale(2, 2);
        // this.blank1.setInteractive();

        // this.blank2 = this.add.image(150, 100, 'blank').setScale(2, 2);
        // this.blank2.setInteractive();

        // this.blank3 = this.add.image(250, 100, 'blank').setScale(2, 2);
        // this.blank3.setInteractive();

        // this.blank4 = this.add.image(50, 200, 'blank').setScale(2, 2);
        // this.blank4.setInteractive();

        // this.blank5 = this.add.image(150, 200, 'blank').setScale(2, 2);
        // this.blank5.setInteractive();

        // this.blank6 = this.add.image(250, 200, 'blank').setScale(2, 2);
        // this.blank6.setInteractive();

        // this.blank7 = this.add.image(50, 300, 'blank').setScale(2, 2);
        // this.blank7.setInteractive();

        // this.blank8 = this.add.image(150, 300, 'blank').setScale(2, 2);
        // this.blank8.setInteractive();

        // this.blank9 = this.add.image(250, 300, 'blank').setScale(2, 2);
        // this.blank9.setInteractive();

        // this.blank1.visible = false;
        // this.blank2.visible = false;
        // this.blank3.visible = false;
        // this.blank4.visible = false;
        // this.blank5.visible = false;
        // this.blank6.visible = false;
        // this.blank7.visible = false;
        // this.blank8.visible = false;
        // this.blank9.visible = false;

        // var barConfig = { x: 200, y: 100 };
        // this.myHealthBar = new HealthBar(this.game, barConfig);

        var points = 0;
        var pointsText;
        var valueX;
        var valueY;

        function randomizeMeCaptX() {
            if (valueX == 50) {
                valueX = Phaser.Math.Between(150, 250);
                if (valueX <= 200) {
                    valueX = 150;
                }
                else {
                    valueX = 250;
                }
            }
            else if (valueX == 150) {
                valueX = Phaser.Math.Between(0, 100);
                if (valueX <= 50) {
                    valueX = 50;
                }
                else {
                    valueX = 250;
                }
            }
            else if (valueX == 250) {
                valueX = Phaser.Math.Between(0, 100);
                if (valueX <= 50) {
                    valueX = 50;
                }
                else {
                    valueX = 150;
                }
            }
            else {
                valueX = Phaser.Math.Between(50, 250);
                if (valueX <= 116) {
                    valueX = 50;
                }
                else if (valueX <= 182 && valueX >= 117) {
                    valueX = 150;
                }
                else {
                    valueX = 250;
                }
            }
        }

        function randomizeMeCaptY() {
            valueY = Phaser.Math.Between(100, 300);
            if (valueY <= 166) {
                valueY = 100;
            }
            else if (valueY <= 232 && valueY >= 167) {
                valueY = 200;
            }
            else {
                valueY = 300;
            }
        }

        pointsText = this.add.text(16, 16, 'Points: 0', {
            fontSize: '32px',
            fill: '#000'
        });

        this.startbutton = this.add.image(this.game.config.width / 2, 240, 'startbutton');
        this.startbutton.setInteractive();
        this.startbutton.on('pointerdown', () => {
            randomizeMeCaptX();
            randomizeMeCaptY();
            randomizer(valueX, valueY, this);
            this.input.setDefaultCursor('url(assets/sprites/hand.png), pointer');
            this.startbutton.visible = false;
            // this.blank1.visible = true;
            // this.blank2.visible = true;
            // this.blank3.visible = true;
            // this.blank4.visible = true;
            // this.blank5.visible = true;
            // this.blank6.visible = true;
            // this.blank7.visible = true;
            // this.blank8.visible = true;
            // this.blank9.visible = true;
        })


        function randomizer(valueX, valueY, me) {
            var randomNumber = Math.floor(Math.random() * 1) + 2;
            var legal = 1;
            console.log(randomNumber);
            if (randomNumber == 2) {
                // spawn a o
                legal = 1;
                spawner(valueX, valueY, legal, me);
            }
            // else {
            //     legal = 0;
            //     spawner(valueX, valueY, legal, me);
            //     // spawn a x

            // }
        }

        function screamer(me) {
            var randomScreamNumber = Math.floor(Math.random() * 8) + 1;
            if (randomScreamNumber == 0) {
                me.scream.play();
            } else if (randomScreamNumber == 1) {
                me.scream1.play();
            } else if (randomScreamNumber == 2) {
                me.scream2.play();
            } else if (randomScreamNumber == 3) {
                me.scream3.play();
            } else if (randomScreamNumber == 4) {
                me.scream4.play();
            } else if (randomScreamNumber == 5) {
                me.scream5.play();
            } else if (randomScreamNumber == 6) {
                me.scream6.play();
            } else {
                me.scream7.play();
            }
        }

        function spawner(transferX, transferY, legal, me) {
            if (legal) {
                console.log(transferX);
                console.log(transferY);
                console.log(me);
                me.o = me.add.image(transferX, transferY, 'legal').setScale(.075, .075);
                me.o.setInteractive();
                me.o.on('pointerdown', () => {
                    points += 1;
                    pointsText.setText('Points: ' + points);
                    randomizeMeCaptX();
                    randomizeMeCaptY();
                    console.log("X = " + valueX);
                    console.log("Y = " + valueY);
                    me.slap.play();
                    screamer(me);
                    me.o.visible = false;
                    randomizer(valueX, valueY, me);

                });
            }
            // else {
            //     me.x = me.add.image(transferX, transferY, 'illegal').setScale(2, 2);
            //     me.x.setInteractive();
            //     me.x.on('pointerdown', () => {
            //         points -= 1;
            //         pointsText.setText('Points: ' + points);
            //         randomizeMeCaptX();
            //         randomizeMeCaptY();
            //         console.log("X = " + valueX);
            //         console.log("Y = " + valueY);
            //         me.slap.play();
            //         me.scream.play();
            //         me.x.visible = false;
            //         randomizer(valueX, valueY, me);
            //     });
            // }
        }
    }
    update(time, delta) {
        // if (this.dKey.isDown || this.cursorKeys.right.isDown) {
        //     this.fatboy.setX(this.fatboy.x + 5);
        // }
        // if (this.wKey.isDown || this.cursorKeys.up.isDown) {
        //     this.fatboy.setY(this.fatboy.y - 5);
        // }
        // if (this.aKey.isDown || this.cursorKeys.left.isDown) {
        //     this.fatboy.setX(this.fatboy.x - 5);
        // }
        // if (this.sKey.isDown || this.cursorKeys.down.isDown) {
        //     this.fatboy.setY(this.fatboy.y + 5);
        // }
        // if (this.spacebarKey) {
        //     this.fatboy.setY(this.fatboy.y - 50);
        // }
    };
    // createTimer() {
    //     this.timeLabel = this.game.add.text(this.game.world.centerX, 100, "00:00", { font: '100px Arial', fill: '#fff' });
    //     this.timeLabel.anchor.setTo(0.5, 0);
    //     this.timeLabel.align = 'center';
    // };

    // updateTimer() {
    //     var currentTime = new Date();
    //     var timeDifference = this.startTime.getTime() - currentTime.getTime();

    //     // Time remaining in Seconds
    //     this.timeElapsed = Math.abs(timeDifference / 1000);

    //     // Time remaining in Seconds
    //     var timeRemaining = this.totalTime - this.timeElapsed;

    //     // Convert seconds into minutes + seconds
    //     var minutes = Math.floor(timeRemaining / 60);
    //     var seconds = Math.floor(timeRemaining) - (60 * minutes);

    //     // Display minutes, add a 0 to the start if less than 10
    //     var result = (minutes < 10) ? "0" + minutes : minutes;

    //     // Display seconds, add a 0 to the start if less than 10
    //     result += (seconds < 10) ? "0" + seconds : ":" + seconds;

    //     this.timeLabel.text = result;
    // }

}
