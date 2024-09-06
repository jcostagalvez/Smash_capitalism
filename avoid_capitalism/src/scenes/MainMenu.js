import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }
    create ()
    {
        this.add.image(512, 384, 'background');
        this.add.tileSprite(590, 100, 706, 65, "Karl");
        //Imagen del sol del comunismo
        this.add.circle(100, 100, 80, 0xFFF070);
        this.add.image(100, 100, 'Martillo_hoz');

        this.add.text(512, 460, 'START DESTROYING CAPITALISM', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
