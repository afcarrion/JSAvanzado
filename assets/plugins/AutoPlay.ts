import MediaPlayer from '../mediaPlayer.js';
class AutoPlay{
  constructor(){}
  run(player:MediaPlayer){
    if(!player.media.muted){
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;