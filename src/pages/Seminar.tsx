import Button from "../component/ui/Button";
import { Collapse } from "../component/ui/Collapse";
import SpeakerCard from "../component/ui/SpeakerCard";

function App() {
    const speakers = [
        {
        name: "Dery Agung Triyadi",
        role: "Aws Indonesia",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
        },
        {
        name: "Sowam Habibi",
        role: "Google Indonesia",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
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
            <h1 className="text-red-900 text-5xl font-bold">IT Seminar</h1>
            <h2 className="text-4xl text-red-900">
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
            </h2>
            <p>
              Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.
              Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
            </p>

            <div className="flex gap-3">
              <Button tittle="Daftar Sekarang" variant="primary" />
              <Button tittle="Hubungi Panitia" variant="outline" />
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
          className="py-24 grid grid-cols-1 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center">
            Tentang IT SEMINAR
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full text-center">
            Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), 
            narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh 
            teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional 
            Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, 
            Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas 
            tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, 
            dan produktivitas manusia—bukan sebagai pengganti.
          </h3>
        </section>

        <section id="speaker" className="py-24">
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center mb-20">
            Temui Pembicara Khusus Kami
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-12">
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