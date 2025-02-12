export default function Home() {
  const mahasiswaData = [
    {
      no: 1,
      nim: '232302023',
      nama: 'Siti Nurjanah',
      gender: 'Perempuan',
      prodi: 'Komputerisasi Akuntansi',
      kelas: 'Reguler',
      semester: '4',
      alamat: 'Sumedang',
      hobby: 'Bermusik',
      cita_cita: 'Penyanyi',
    },
    {
      no: 2,
      nim: '232302024',
      nama: 'Budi Santoso',
      gender: 'Laki-laki',
      prodi: 'Sistem Informasi',
      kelas: 'Reguler',
      semester: '5',
      alamat: 'Bandung',
      hobby: 'Bermain Sepak Bola',
      cita_cita: 'Pengusaha',
    },
    {
      no: 3,
      nim: '232302025',
      nama: 'Rina Wulandari',
      gender: 'Perempuan',
      prodi: 'Teknik Informatika',
      kelas: 'Reguler',
      semester: '3',
      alamat: 'Jakarta',
      hobby: 'Membaca Buku',
      cita_cita: 'Dosen',
    },
    {
      no: 4,
      nim: '232302026',
      nama: 'Andi Prasetyo',
      gender: 'Laki-laki',
      prodi: 'Teknik Elektro',
      kelas: 'Reguler',
      semester: '6',
      alamat: 'Surabaya',
      hobby: 'Fotografi',
      cita_cita: 'Engineer',
    },
    {
      no: 5,
      nim: '232302027',
      nama: 'Indah Pertiwi',
      gender: 'Perempuan',
      prodi: 'Manajemen',
      kelas: 'Reguler',
      semester: '7',
      alamat: 'Yogyakarta',
      hobby: 'Travelling',
      cita_cita: 'CEO',
    }
  ];

  return (
    <div className="container mx-auto mt-5">

      {/* Desktop View - Table (tampil jika lebar layar >= 1024px) */}
      <div className="hidden lg:block">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">NIM</th>
              <th className="border px-4 py-2">Nama</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Prodi</th>
              <th className="border px-4 py-2">Kelas</th>
              <th className="border px-4 py-2">Semester</th>
              <th className="border px-4 py-2">Alamat</th>
              <th className="border px-4 py-2">Hobby</th>
              <th className="border px-4 py-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaData.map((mahasiswa) => (
              <tr key={mahasiswa.no}>
                <td className="border px-4 py-2">{mahasiswa.no}</td>
                <td className="border px-4 py-2">{mahasiswa.nim}</td>
                <td className="border px-4 py-2">{mahasiswa.nama}</td>
                <td className="border px-4 py-2">{mahasiswa.gender}</td>
                <td className="border px-4 py-2">{mahasiswa.prodi}</td>
                <td className="border px-4 py-2">{mahasiswa.kelas}</td>
                <td className="border px-4 py-2">{mahasiswa.semester}</td>
                <td className="border px-4 py-2">{mahasiswa.alamat}</td>
                <td className="border px-4 py-2">{mahasiswa.hobby}</td>
                <td className="border px-4 py-2">{mahasiswa.cita_cita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card System (tampil jika lebar layar < 1024px) */}
      <div className="lg:hidden">
        {mahasiswaData.map((mahasiswa) => (
          <div key={mahasiswa.no} className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold text-center mb-4">Detail Mahasiswa</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-bold">No:</span>
                <span>{mahasiswa.no}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">NIM:</span>
                <span>{mahasiswa.nim}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Nama:</span>
                <span>{mahasiswa.nama}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Gender:</span>
                <span>{mahasiswa.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Prodi:</span>
                <span>{mahasiswa.prodi}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Kelas:</span>
                <span>{mahasiswa.kelas}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Semester:</span>
                <span>{mahasiswa.semester}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Alamat:</span>
                <span>{mahasiswa.alamat}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Hobby:</span>
                <span>{mahasiswa.hobby}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Cita-cita:</span>
                <span>{mahasiswa.cita_cita}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
