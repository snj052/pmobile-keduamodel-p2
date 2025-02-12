export default function Home() {
  const data = [
    { no: 1, nim: '12345678', nama: 'Hendrik', gender: 'Laki-laki', prodi: 'KA', kelas: 'A', semester: '4', alamat: 'Bandung', hobby:'Bermain Sepak Bola', cita_cita: 'bos muda' },
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
    <div className="container mt-5">
      <h1 className="mb-4">Daftar Mahasiswa</h1>

      <div className="d-flex flex-column">
        {data.map((row, index) => (
          <div key={index} className="d-flex flex-wrap border-bottom p-3">
            {/* Bagian No */}
            <div className="d-flex justify-content-between w-50 w-sm-25">
              <span className="font-weight-bold">No:</span>
              <span>{row.no}</span>
            </div>
            {/* Bagian NIM */}
            <div className="d-flex justify-content-between w-50 w-sm-25">
              <span className="font-weight-bold">NIM:</span>
              <span>{row.nim}</span>
            </div>
            {/* Bagian Nama */}
            <div className="d-flex justify-content-between w-50 w-sm-25">
              <span className="font-weight-bold">Nama:</span>
              <span>{row.nama}</span>
            </div>
            {/* Bagian Gender */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Gender:</span>
              <span>{row.gender}</span>
            </div>
            {/* Bagian Prodi */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Prodi:</span>
              <span>{row.prodi}</span>
            </div>
            {/* Bagian Kelas */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Kelas:</span>
              <span>{row.kelas}</span>
            </div>
            {/* Bagian Semester */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Semester:</span>
              <span>{row.semester}</span>
            </div>
            {/* Bagian Alamat */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Alamat:</span>
              <span>{row.alamat}</span>
            </div>
            {/* Bagian Hobby */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Hobby:</span>
              <span>{row.hobby}</span>
            </div>
            {/* Bagian Cita-cita */}
            <div className="d-flex justify-content-between w-50 w-sm-25 d-none d-sm-block">
              <span className="font-weight-bold">Cita-cita:</span>
              <span>{row.cita_cita}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
