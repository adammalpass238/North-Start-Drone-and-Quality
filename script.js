document.addEventListener('DOMContentLoaded',()=>{
  const items=document.querySelectorAll('.portfolio-item');
  const lightbox=document.getElementById('lightbox');
  const mediaBox=document.getElementById('lightbox-media');
  const closeBtn=document.querySelector('.lightbox-close');
  items.forEach(item=>{
    item.addEventListener('click',()=>{
      const mediaSrc=item.dataset.media;
      const isVideo=item.dataset.video==='true';
      mediaBox.innerHTML='';
      if(isVideo){
        const video=document.createElement('video');
        video.src=mediaSrc;
        video.controls=true;
        video.autoplay=true;
        video.playsInline=true;
        video.style.width='100%';
        mediaBox.appendChild(video);
      } else {
        const img=document.createElement('img');
        img.src=mediaSrc;
        img.alt=item.querySelector('.meta span').textContent+' visual';
        mediaBox.appendChild(img);
      }
      lightbox.classList.add('active');
    });
  });
  closeBtn.addEventListener('click',()=>lightbox.classList.remove('active'));
  lightbox.addEventListener('click',(e)=>{if(e.target===lightbox)lightbox.classList.remove('active');});
  const form=document.getElementById('quoteForm');
  const confirmation=document.getElementById('confirmation');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    confirmation.style.display='block';
    form.reset();
    setTimeout(()=>{confirmation.style.display='none';},4000);
  });
});