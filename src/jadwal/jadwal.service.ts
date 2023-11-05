import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto';
import { Repository } from 'typeorm';
import { Jadwal } from './entities/jadwal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JadwalKelas } from './jadwal.interface';

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private readonly jadwalRepository: Repository<Jadwal>,
  ) {}

  async getBookingMahasiswa(idKelas: string) {
    const booking = await this.jadwalRepository.query(
      `SELECT * FROM view_gettiketbooking WHERE id_kelas = '${idKelas}'`,
    );
    console.log(booking);
    if (booking.length == 0) {
      throw new NotFoundException('Booking tidak ditemukan');
    }
    return booking;
  }

  async create(createJadwalDto: CreateJadwalDto) {
    return 'This action adds a new jadwal';
  }
  async getJadwalKelas(idKelas: string) {
    const jadwal = await this.jadwalRepository.query(
      `SELECT * FROM view_getjadwalkelas WHERE id_kelas = '${idKelas}'`,
    );
    if (!jadwal) {
      throw new NotFoundException('Jadwal tidak ditemukan');
    }

    // Membuat objek untuk mengelompokkan jadwal berdasarkan hari
    const groupedJadwal: { [hari: string]: any[] } = {};

    jadwal.forEach((element: JadwalKelas) => {
      const hari = element.nama_hari;

      // Jika hari belum ada dalam objek groupedJadwal, inisialisasi array kosong
      if (!groupedJadwal[hari]) {
        groupedJadwal[hari] = [];
      }

      // Tambahkan jadwal ke dalam array yang sesuai dengan hari
      groupedJadwal[hari].push({
        id: element.id_kelas,
        nama_matkul: element.nama_matkul,
        nama_dosen: element.nama,
        jam_mulai: element.jam_mulai,
        jam_selesai: element.jam_selesai,
        qrcode: element.qr_code,
        nama_ruang: element.nama_ruang,
        status_jadwal: element.status_jadwal,
      });
    });

    return groupedJadwal;
  }

  async findAll() {
    return await this.jadwalRepository.find();
  }

  async findOne(id: string) {
    return `This action returns a #${id} jadwal`;
  }

  async update(id: number, updateJadwalDto: UpdateJadwalDto) {
    return `This action updates a #${id} jadwal`;
  }

  async remove(id: number) {
    return `This action removes a #${id} jadwal`;
  }
}
