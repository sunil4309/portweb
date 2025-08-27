document.addEventListener('DOMContentLoaded', ()=>{ const audio=document.getElementById('audioPlayer'); const playlist=document.getElementById('playlist'); if(!audio||!playlist) return; const cover=document.getElementById('albumCover'); const title=document.getElementById('trackTitle'); const artist=document.getElementById('trackArtist'); const playBtn=document.getElementById('playPause'); const nextBtn=document.getElementById('next'); const prevBtn=document.getElementById('prev'); const seek=document.getElementById('seekBar'); const vol=document.getElementById('volumeBar'); const tracks=Array.from(playlist.querySelectorAll('li')).map(li=>({src:li.dataset.src,cover:li.dataset.cover,title:li.textContent.trim(),artist:li.dataset.artist})); let idx=0; function load(i){ idx=(i+tracks.length)%tracks.length; const t=tracks[idx]; audio.src=t.src; cover.src=t.cover||'images/default.jpg'; title.textContent=t.title; artist.textContent=t.artist; highlight(); } function play(){ audio.play(); playBtn.textContent='⏸';} function pause(){ audio.pause(); playBtn.textContent='▶'; } function highlight(){ playlist.querySelectorAll('li').forEach((li,i)=>li.classList.toggle('active',i===idx)); } load(0); playlist.addEventListener('click',(e)=>{ if(e.target.tagName==='LI'){ load(Array.from(playlist.children).indexOf(e.target)); play(); }}); playBtn.addEventListener('click',()=> audio.paused?play():pause()); nextBtn.addEventListener('click',()=>{ load(idx+1); play(); }); prevBtn.addEventListener('click',()=>{ load(idx-1); play(); }); audio.addEventListener('timeupdate', ()=>{ const pct = audio.duration? (audio.currentTime/audio.duration)*100 : 0; seek.value=pct; seek.style.background=`linear-gradient(90deg, var(--primary) ${pct}%, #0000 0)`; document.getElementById('currentTime').textContent = formatTime(audio.currentTime); document.getElementById('duration').textContent = formatTime(audio.duration); }); seek.addEventListener('input', ()=>{ if(audio.duration) audio.currentTime=(seek.value/100)*audio.duration; }); vol.addEventListener('input', ()=>{ audio.volume=+vol.value; const p=Math.round(+vol.value*100); vol.style.background=`linear-gradient(90deg, var(--primary) ${p}%, #0000 0)`; }); vol.dispatchEvent(new Event('input')); function formatTime(s){ if(!isFinite(s)) return '0:00'; const m=Math.floor(s/60); const ss=Math.floor(s%60).toString().padStart(2,'0'); return `${m}:${ss}`; } });document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPause");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const seekBar = document.getElementById("seekBar");
  const volumeBar = document.getElementById("volumeBar");
  const playlist = document.getElementById("playlist").getElementsByTagName("li");

  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");
  const albumCover = document.getElementById("albumCover");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");

  let currentTrack = 0;

  // Load track
  function loadTrack(index) {
    const song = playlist[index];
    audioPlayer.src = song.getAttribute("data-src");
    trackTitle.textContent = song.textContent;
    trackArtist.textContent = song.getAttribute("data-artist");
    albumCover.src = song.getAttribute("data-cover");
    audioPlayer.load();
  }

  // Play / Pause toggle
  function togglePlay() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "▶";
    }
  }

  // Next / Previous
  function playNext() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    audioPlayer.play();
  }

  function playPrev() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    audioPlayer.play();
  }

  // Update seek bar
  audioPlayer.addEventListener("timeupdate", () => {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;

    // Update time
    let curMins = Math.floor(audioPlayer.currentTime / 60);
    let curSecs = Math.floor(audioPlayer.currentTime % 60);
    let durMins = Math.floor(audioPlayer.duration / 60) || 0;
    let durSecs = Math.floor(audioPlayer.duration % 60) || 0;

    currentTimeEl.textContent = `${curMins}:${curSecs.toString().padStart(2, "0")}`;
    durationEl.textContent = `${durMins}:${durSecs.toString().padStart(2, "0")}`;
  });

  // Seek
  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });

  // Volume
  volumeBar.addEventListener("input", () => {
    audioPlayer.volume = volumeBar.value;
  });

  // Playlist click
  Array.from(playlist).forEach((song, index) => {
    song.addEventListener("click", () => {
      currentTrack = index;
      loadTrack(currentTrack);
      audioPlayer.play();
      playPauseBtn.textContent = "⏸";
    });
  });

  // Auto next
  audioPlayer.addEventListener("ended", playNext);

  // Button bindings
  playPauseBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", playNext);
  prevBtn.addEventListener("click", playPrev);

  // Load first track
  loadTrack(currentTrack);
});
// MUSIC PLAYER SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPause");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const seekBar = document.getElementById("seekBar");
  const volumeBar = document.getElementById("volumeBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const albumCover = document.getElementById("albumCover");
  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");
  const playlist = document.getElementById("playlist");
  const tracks = playlist.querySelectorAll("li");

  let currentTrack = 0;
  let isPlaying = false;

  function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.getAttribute("data-src");
    albumCover.src = track.getAttribute("data-cover");
    trackTitle.textContent = track.textContent;
    trackArtist.textContent = track.getAttribute("data-artist");

    // Remove active class from all
    tracks.forEach(t => t.classList.remove("active"));
    // Add active to current
    track.classList.add("active");
  }

  function playTrack() {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.textContent = "⏸"; // Pause icon
  }

  function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.textContent = "▶"; // Play icon
  }

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) pauseTrack();
    else playTrack();
  });

  prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
  });

  nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
  });

  // Seek bar
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress || 0;

    // Update time display
    let currentMins = Math.floor(audioPlayer.currentTime / 60);
    let currentSecs = Math.floor(audioPlayer.currentTime % 60);
    let durationMins = Math.floor(audioPlayer.duration / 60);
    let durationSecs = Math.floor(audioPlayer.duration % 60);

    if (currentSecs < 10) currentSecs = "0" + currentSecs;
    if (durationSecs < 10) durationSecs = "0" + durationSecs;

    currentTimeEl.textContent = `${currentMins}:${currentSecs}`;
    durationEl.textContent = `${durationMins || 0}:${durationSecs || "00"}`;
  });

  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });

  // Volume
  volumeBar.addEventListener("input", () => {
    audioPlayer.volume = volumeBar.value;
  });

  // Playlist click handler
  tracks.forEach((track, index) => {
    track.addEventListener("click", () => {
      currentTrack = index;
      loadTrack(currentTrack);
      playTrack();
    });
  });

  // Load first track
  loadTrack(currentTrack);
});
