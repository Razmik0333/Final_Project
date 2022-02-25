import './About.css';

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="info">
          <h3 className="title">Մեր մասին</h3>
          <div className="info_description">
            <p>
              Մեզ մոտ կարող եք գտնել ծրագրավորման ոլորտի տարբեր գրքեր անգլերեն լեզվով։
              Մեզ համար առաջնային է օտարալեզու գրքերի տարածումը Հայաստանում։
              <br />
              Մենք հավատում ենք գիտելիքի ուժին:
              Այսպիսով, մեր նպատակն է կիսել այն նրանց հետ, ովքեր ցանկանում են:
              Ահա թե ինչու մեր կատարած յուրաքանչյուր գործողություն
              և Ձեր կատարած գրքերի յուրաքանչյուր գնում օգնում է մեզ հասնել մեր նպատակին:
            </p>
          </div>
        </div>

        <div className="image">
          <img src="/icons/books.jpg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
