import MediaPlayer from '../../mediaPlayer'
import Ads, { Ad } from './Ads'
class AdsPlugins{
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor(){
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
            <div class = "ads">
                <a class="ads__link" href="${this.currentAd.url}" target="_blanck">
                    <img class="ads__img" src="${this.currentAd.imageURL}" />
                    <div class="ads__info">
                        <h5 class="ads__tittle">${this.currentAd.tittle}</h5>
                        <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>
        `;

        setTimeout(() =>{
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        }, 10000);

    }

    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime % 30 === 0){
            this.renderAd();
        }

    }
}

export default AdsPlugins;