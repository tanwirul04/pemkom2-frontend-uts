import "./App.css";
import Header from "./component/Header"; 
import Button from "./component/Button";
import CardPembicara from "./component/CardPembicara";
import { Collapse } from "./component/Collapse";
import { CardInformasi } from "../component/CardInformasi";
import { SectionTentang } from "../component/SectionTentang";
import { CardKegiatan } from "../component/CardKegiatan";

function App() {
  return (
  <>
    <Header />

    <CardInformasi
      icon="https://www.invofest-harkatnegeri.com/assets/text-image.png"
      desc="Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”."
      imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
      buttons={
        <><Button tittle= "Info Selengapnya" variant="primary"/>
          <Button tittle= "Hubungi Panitia" variant="outline"/></>
      }
    />

    <SectionTentang 
        judul="Tentang INVOFEST"
        deskripsiUtama="Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi."
      >
        <CardKegiatan 
          title="IT Seminar" 
          description="Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi." 
        />
        <CardKegiatan 
          title="IT Talkshow" 
          description="Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.
" 
        />
        <CardKegiatan 
          title="IT Competition" 
          description="Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan." 
        />
        <CardKegiatan 
          title="IT Workshop" 
          description="Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan." 
        />
      </SectionTentang>
    

    <div id="pembicara" className="py-20 px-10 mt-10">
      <h2 className="text-5xl font-bold text-red-900 text-center mb-24">
        Temui Pembicara Khusus Kami
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <CardPembicara
          nama="Dery Agung Triyadi"
          role="Aws Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
        />
        <CardPembicara
          nama="Sowam Habibi"
          role="Google Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
        />
      </div>
    </div>
    
    <div className="py-20 px-10 bg-slate-50">
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-bold text-4xl">
        Punya Pertanyaan? Lihat Disini!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Collapse 
          title="Apa itu INVOFEST?"
          description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
        />
        <Collapse 
          title="Bagaimana saya mengetahui pemenang kompetisi?"
          description="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri."
        />
        <Collapse 
          title="Kapan dan dimana INVOFEST dilaksanakan?"
          description="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online."
        />
        <Collapse 
          title="Apa yang didapat pemenang dalam kompetisi?"
          description="Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."
        />
      </div>
    </div>

  </>
  );
}

export default App;