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
      imgUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
      title: "Poster Design Competition",
      description:
        "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
    },
    {
      imgUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
      title: "UI/UX Design Competition",
      description:
        "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
    },
    {
      imgUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
      title: "Web Design Competition",
      description:
        "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
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
            <h1 className="text-red-900 text-5xl font-bold">IT Competition</h1>
            <h2 className="text-4xl text-red-900">
              "From Creation to Innovation"
            </h2>
            <p>
              Kompetisi dalam INVOFEST ini mengusung tema “From Creation to
              Innovation”, Tema ini bertujuan mengajak generasi muda untuk
              mengembangkan inovasi dan kreativitas guna membentuk kelompok yang
              memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang
              berkelanjutan.
            </p>

            <div className="flex gap-3">
              <Button tittle="Info Selengkapnya" variant="primary" />
              <Button tittle="Hubungi Panitia" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
              alt=""
            />
          </div>
        </section>

        <section
          className="py-24 grid grid-cols-1 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center">
            DESKRIPSI KOMPETISI
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full text-center">
            Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics Vocational Festival) 2025 adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. 
            Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, 
            yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, 
            lingkungan, pendidikan, maupun tanggung jawab sosial.
          </h3>
        </section>

        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-3 gap-10 px-3"
        >
          <h1 className="text-5xl font-bold text-red-900 col-span-full text-center">
            DAFTAR KOMPETISI
          </h1>
          <h3 className="text-lg text-gray-700 col-span-full text-center">
            Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
          </h3>
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <img
                src={item.imgUrl}
                alt=""
                className="w-full object-cover rounded-t-lg"
              />
              <h3 className="text-2xl text-gray-700 font-bold mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                tittle="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
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