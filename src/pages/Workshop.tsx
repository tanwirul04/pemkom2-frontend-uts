import Button from "../component/ui/Button";
import { Collapse } from "../component/ui/Collapse";
import SpeakerCard from "../component/ui/SpeakerCard";

function App() {
    const speakers = [
        {
        name: "Lhuqita Fazry",
        role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
        },
        {
        name: "M. Dendi Purwanto",
        role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
        },
        {
        name: "Danang Avan M",
        role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
        },
    ];
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

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 md:px-10">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <h1 className="text-red-900 text-5xl font-bold">IT Workshop</h1>
            <h2 className="text-4xl text-red-900">
              “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
            </h2>
            <p>
              IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. 
              Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>

            <div className="flex gap-3">
              <Button tittle="Daftar Sekarang" variant="primary" />
              <Button tittle="Hubungi Panitia" variant="outline" />
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
          className="py-24 grid grid-cols-1 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center">
            Tentang IT Workshop
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full text-center">
            Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, 
            para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan 
            diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh 
            untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), 
            workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
          </h3>
        </section>

        <section id="speaker" className="py-24">
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center mb-20">
            Temui Pembicara Khusus Kami
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
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