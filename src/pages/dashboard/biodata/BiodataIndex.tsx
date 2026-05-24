import fotoProfil from "../../../image/myphoto3.jpg";

export default function BiodataIndex() {
    // Data diri yang akan ditampilkan
    const myBiodata = {
        nama: "Tanwirul Khasanah",       
        nim: "24090023",  
        kelas: "4B",    
        prodi: "Sarjana Terapan Teknik Informatika", 
        instansi: "Universitas Harkat Negeri" 
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Bagian Judul Halaman */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Halaman Biodata</h1>
                <p className="text-sm text-gray-500 mt-1">Informasi data diri mahasiswa.</p>
            </div>

            {/* Kartu Utama Biodata */}
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                {/* Header Kartu */}
                <div className="bg-linear-to-r from-slate-800 to-blue-900 px-6 py-4 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0 overflow-hidden">
                        <img 
                            src={fotoProfil}
                            alt="Foto Profil" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white">{myBiodata.nama}</h2>
                        <p className="text-xs text-blue-200 tracking-wider uppercase font-medium mt-0.5">NIM. {myBiodata.nim}</p>
                    </div>
                </div>

                {/* Konten Biodata */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Nama Lengkap */}
                        <div className="border-b border-gray-100 pb-3">
                            <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider block">Nama Lengkap</span>
                            <span className="text-base font-medium text-gray-800 mt-1 block">{myBiodata.nama}</span>
                        </div>

                        {/* NIM */}
                        <div className="border-b border-gray-100 pb-3">
                            <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider block">Nomor Induk Mahasiswa (NIM)</span>
                            <span className="text-base font-medium text-gray-800 mt-1 block">{myBiodata.nim}</span>
                        </div>

                        {/* Kelas */}
                        <div className="border-b border-gray-100 pb-3">
                            <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider block">Kelas</span>
                            <span className="text-base font-medium text-gray-800 mt-1 block">{myBiodata.kelas}</span>
                        </div>

                        {/* Program Studi */}
                        <div className="border-b border-gray-100 pb-3">
                            <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider block">Program Studi</span>
                            <span className="text-base font-medium text-gray-800 mt-1 block">{myBiodata.prodi}</span>
                        </div>

                        {/* Instansi */}
                        <div className="border-b border-gray-100 pb-3 md:col-span-2">
                            <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider block">Instansi / Perguruan Tinggi</span>
                            <span className="text-base font-medium text-gray-800 mt-1 block">{myBiodata.instansi}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}