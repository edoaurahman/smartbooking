// Buat interface untuk struktur data status jam
export interface JamStatus {
  nama_ruang: string;
  id_lantai: string;
  date: string | null;
  nama_hari: string;
  jam_mulai: string;
  jam_selesai: string;
  status_jam: string;
}

// Buat interface untuk struktur data ruang
export interface RuangStatus {
  status_ruang: string;
  status_jam: JamStatus[];
}
