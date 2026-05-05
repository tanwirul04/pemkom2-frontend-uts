import Button from "../component/ui/Button";
import { Collapse } from "../component/ui/Collapse";
import { Card } from "../component/ui/Card";

function App() {

  const collapseItems = [
    {
      title: "Apa itu INVOFEST?",
      description:
        "INVOFEST (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana INVOFEST akan diselenggarakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description:
        "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 md:px-10">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />
            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”.
            </p>

            <div className="flex gap-3">
              <Button tittle="Info Selengkapnya" variant="primary" />
              <Button tittle="Hubungi Panitia" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
            />
          </div>
        </section>

        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-4 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full">
            Tentang Invofest
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, 
            adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam 
            menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”. 
            Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow 
            dengan para ahli teknologi.
          </h3>
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                tittle="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </section>

        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <h1 className="text-red-900 text-5xl font-bold">IT Seminar</h1>
            
            <p>
              Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, 
              Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. 
              Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra 
              yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>

            <div className="flex gap-3">
              <Button tittle="DAFTAR IT SEMINAR" variant="primary" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
              alt=""
            />
          </div>
        </section>

        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              alt=""
            />
          </div>
          <div className="w-2/3 flex flex-col gap-6">
            <h1 className="text-red-900 text-5xl font-bold">IT Talkshow</h1>
            
            <p>
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” 
              Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, 
              melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, 
              etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan 
              di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. 
              Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, 
              tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, 
              mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>

            <div className="flex gap-3">
              <Button tittle="DAFTAR IT TALKSHOW" variant="primary" />
            </div>
          </div>
        </section>

        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <h1 className="text-red-900 text-5xl font-bold">IT Workshop</h1>
            
            <p>
              Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi 
              Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat 
              untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>

            <div className="flex gap-3">
              <Button tittle="DAFTAR IT WORKSHOP" variant="primary" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              alt=""
            />
          </div>
        </section>

        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
              alt=""
            />
          </div>
          <div className="w-2/3 flex flex-col gap-6">
            <h1 className="text-red-900 text-5xl font-bold">IT Competition</h1>
            
            <p>
             "From Creation to Innovation" adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. 
             Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi 
             yang berdampak, berkelanjutan, dan bernilai guna tinggi.
            </p>

            <div className="flex gap-3">
              <Button tittle="DAFTAR IT COMPETITION" variant="primary" />
            </div>
          </div>
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          <h1 className="text-4xl font-bold text-gray-700 text-center mb-8 col-span-full">
            Punya Pertanyaan? Lihat Disini
          </h1>
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>

        
      </div>
    </>
  );
}

export default App;