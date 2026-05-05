import Button from "../component/ui/Button";
import { Collapse } from "../component/ui/Collapse";
import SpeakerCard from "../component/ui/SpeakerCard";

function App() {
    const speakers = [
        {
        name: "Moh. Ichsan Maulana",
        role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
        },
        {
        name: "M. Zaim Zamzami",
        role: "Programmer, PT. Pertamina Drilling Service Indonesia",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
        },
        {
        name: "Daffa Zuhdan Muhtar",
        role: "Android Developer, PT. Astra Internasional",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
        },
        {
        name: "Bayu Adi Prasetiyo",
        role: "Software Engineer, KOMPAS.ID",
        imageUrl:
            "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
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
            <h1 className="text-red-900 text-5xl font-bold">IT Talkshow</h1>
            <h2 className="text-4xl text-red-900">
              “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
            </h2>
            <p>
              Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan 
              nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens 
              untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
            </p>

            <div className="flex gap-3">
              <Button tittle="Daftar Sekarang" variant="primary" />
              <Button tittle="Hubungi Panitia" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              alt=""
            />
          </div>
        </section>

        <section
          className="py-24 grid grid-cols-1 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center">
            Tentang IT Talkshow
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full text-center">
            Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, 
            muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? 
            Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia 
            dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk 
            menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. 
            Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
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