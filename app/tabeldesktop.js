export default function Home() {
  // Data mahasiswa dengan 10 entri
  const data = [
    { no: 1, nim: '12345678', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Informatika', kelas: 'A', semester: '6', alamat: 'Jl. Merdeka No.10, Jakarta', hobby: 'Membaca, Bermain Sepak Bola', cita_cita: 'Software Engineer' },
    { no: 2, nim: '23456789', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'B', semester: '4', alamat: 'Jl. Sejahtera No.5, Bandung', hobby: 'Menulis, Berkebun', cita_cita: 'UI/UX Designer' },
    { no: 3, nim: '34567890', nama: 'Alice Johnson', gender: 'Perempuan', prodi: 'Teknik Komputer', kelas: 'C', semester: '2', alamat: 'Jl. Raya No.15, Surabaya', hobby: 'Fotografi, Traveling', cita_cita: 'Data Scientist' },
    { no: 4, nim: '45678901', nama: 'Bob Martin', gender: 'Laki-laki', prodi: 'Teknik Informatika', kelas: 'D', semester: '3', alamat: 'Jl. Alam No.25, Yogyakarta', hobby: 'Bermain Game, Menonton Film', cita_cita: 'Cybersecurity Expert' },
    { no: 5, nim: '56789012', nama: 'Charlie Brown', gender: 'Laki-laki', prodi: 'Matematika', kelas: 'A', semester: '5', alamat: 'Jl. Sejuk No.8, Bali', hobby: 'Berjalan-jalan, Musik', cita_cita: 'Data Analyst' },
    { no: 6, nim: '67890123', nama: 'Emily Davis', gender: 'Perempuan', prodi: 'Fisika', kelas: 'B', semester: '7', alamat: 'Jl. Indah No.6, Makassar', hobby: 'Mendaki Gunung, Fotografi', cita_cita: 'Physicist' },
    { no: 7, nim: '78901234', nama: 'David Wilson', gender: 'Laki-laki', prodi: 'Kimia', kelas: 'C', semester: '1', alamat: 'Jl. Kemenangan No.30, Medan', hobby: 'Berenang, Membaca', cita_cita: 'Chemist' },
    { no: 8, nim: '89012345', nama: 'Sophia Brown', gender: 'Perempuan', prodi: 'Biologi', kelas: 'D', semester: '8', alamat: 'Jl. Mawar No.18, Surabaya', hobby: 'Berkebun, Bersepeda', cita_cita: 'Biologist' },
    { no: 9, nim: '90123456', nama: 'Lucas Clark', gender: 'Laki-laki', prodi: 'Ekonomi', kelas: 'A', semester: '4', alamat: 'Jl. Bahagia No.7, Jakarta', hobby: 'Olahraga, Traveling', cita_cita: 'Economist' },
    { no: 10, nim: '01234567', nama: 'Mia White', gender: 'Perempuan', prodi: 'Sosiologi', kelas: 'B', semester: '6', alamat: 'Jl. Damai No.21, Bandung', hobby: 'Melukis, Membaca Buku', cita_cita: 'Sociologist' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Daftar Mahasiswa</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">NIM</th>
            <th className="px-4 py-2 border">Nama</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Prodi</th>
            <th className="px-4 py-2 border">Kelas</th>
            <th className="px-4 py-2 border">Semester</th>
            <th className="px-4 py-2 border">Alamat</th>
            <th className="px-4 py-2 border">Hobby</th>
            <th className="px-4 py-2 border">Cita-cita</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.no} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{row.no}</td>
              <td className="px-4 py-2 border">{row.nim}</td>
              <td className="px-4 py-2 border">{row.nama}</td>
              <td className="px-4 py-2 border">{row.gender}</td>
              <td className="px-4 py-2 border">{row.prodi}</td>
              <td className="px-4 py-2 border">{row.kelas}</td>
              <td className="px-4 py-2 border">{row.semester}</td>
              <td className="px-4 py-2 border">{row.alamat}</td>
              <td className="px-4 py-2 border">{row.hobby}</td>
              <td className="px-4 py-2 border">{row.cita_cita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
