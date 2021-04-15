import FancyCard from './FancyCard';
import './About.css';

function About(props) {
  return (
    <div className="About">
      <FancyCard
        title="Biz Kimiz?" 
        text="Özel ENKA Teknik Okulları, ENKA Vakfı çatısı altında bütün öğrencilerine tam burslu eğitim veren bir vakıf kuruluşudur. Bizler de Kocaeli’de bulunan okulumuzda eğitim gören toplumsal gelişime katkıda bulunmak amacıyla bir araya gelmiş bir öğrenci topluluğuyuz."
        background="linear-gradient(to right, #2194cc 0%, #c50d63 100%)"
        />
      <FancyCard
        title="Enka360 Oluşumu" 
        text="Enka360 ana odak noktası canlı yayınlar olup Instagram ve YouTube başta olmak üzere çeşitli platformlarda faaliyet gösterecek bir oluşumdur. Sosyal medya üzerinden yapılacak yayın ve etkinliklerle öğrenen ve gelişen bir topluluk oluşturmayı amaçlar. Bu vesileyle düzenlenecek olan yayınlar, moderatör ve alanında uzman konuşmacıların gerçekleştireceği özgün ENKA360 formatında olacaktır. Yayınlar “gelişim” teması altında gerçekleşecek ve sorular konuğumuzun uzmanlık alanına göre şekillendirilecektir. 2021’in Mart ayından itibaren faaliyet gösterilecektir. Konferans uygulamaları üzerinden iki haftalık periyotlarla yapılan söyleşiler, YouTube platformuna canlı yayın olarak aktarılacaktır. Yayınlar, 30-40 dakika aralığında sürecektir."
        background="linear-gradient(to right, #fe157e 0%, #f71be5 100%)"
        />
      <FancyCard
        title="Hedef Kitle" 
        text="&quot;Tek sınırımız, bizim kendimizi geliştirmek konusundaki isteğimizdir.&quot; sözünün doğruluğuna inanarak çıkılan bu yolda; toplumda kendini geliştirmeye meraklı, uzman konuklarımızdan alacağı bilgilere açık, internet erişimi olan herkese hitap edilir."
        background="linear-gradient(to right, #4426aa 0%, #d4489e 100%)"
        />
    </div>
  );
}

export default About;