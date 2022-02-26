import './Policy.css';

function Policy() {
  return (
    <div className="policy">
      <div className="image_library">
        <center><img src="/icons/library_image.jpeg" alt="" className="library" /></center>
      </div>

      <div className="policy_list">
        <h2>Ինչպե՞ս պատվիրել</h2>
        <ul className="order">
          <li>ընտրեք նախընտրած ապրանքը, քանակը և այլ անհրաժեշտ պարամետրերը</li>
          <li>ընտրելուց հետո ավելացնում ենք զամբյուղում</li>
          <li>բացում ենք զամբյուղը</li>
          <li>տեղափոխվելով զամբյուղ լրացրեք համապատասխան դաշտերը</li>
        </ul>
      </div>
    </div>
  );
}

export default Policy;
