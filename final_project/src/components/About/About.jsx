import './About.css';

function About() {
  return (
 <div className="about">
         <div className='info'>
             <div className='title'>Մեր մասին</div>
             <div className='info_description'>
                 Մեզ մոտ կարող եք գտնել ծրագրավորման ոլորտի տարբեր գրքեր անգլերեն լեզվով օնլայն հարթակում։ Մեզ համար առաջնային է օտարալեզու գրքերի տարածումը Հայաստանում։
                 <br/>
                 <br/>
                 Մենք հավատում ենք գիտելիքի ուժին: Այսպիսով, մեր նպատակն է կիսել այն նրանց հետ, ովքեր ցանկանում են: Ահա թե ինչու մեր կատարած յուրաքանչյուր գործողություն և Ձեր կատարած գրքերի յուրաքանչյուր գնում օգնում է մեզ հասնել մեր նպատակին: 
             </div>
             </div>
         
         <div className='image'>
           <img src='/icons/books.jpg' className='image'></img>
         </div>
     </div>

  )
}

export default About;

