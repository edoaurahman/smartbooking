import { Injectable } from '@nestjs/common';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruang } from './entities/ruang.entity';
import { JamStatus, RuangStatus } from './ruang.interface';

@Injectable()
export class RuangService {
  private ruangData: { [key: string]: RuangStatus } = {};
  private ruangStatus: { [key: string]: { status_ruang: string } } = {};

  constructor(
    @InjectRepository(Ruang)
    private ruangRepository: Repository<Ruang>,
  ) {}

  tambahRuangStatus(namaRuang: string, statusRuang: string) {
    this.ruangStatus[namaRuang] = { status_ruang: statusRuang };
  }

  tambahDataRuang(namaRuang: string, dataRuang: RuangStatus) {
    // cek apakah nama ruang sudah ada di objek
    if (!this.ruangData.hasOwnProperty(namaRuang)) {
      // jika belum, buat array baru untuk menyimpan data ruang
      this.ruangData[namaRuang] = {
        status_ruang: dataRuang.status_ruang,
        status_jam: [],
      };
    }
    // tambahkan data ruang ke dalam array
    this.ruangData[namaRuang].status_jam.push(dataRuang.status_jam[0]);
  }

  async getBookingStatus(id_lantai: string, hari: string) {
    // clear data
    this.ruangData = {};
    this.ruangStatus = {};
    const status = await this.ruangRepository.find({
      where: { idLantai: id_lantai },
    });
    status.forEach((ruang: any) => {
      const namaRuang = ruang.namaRuang;
      const statusRuang = ruang.statusRuang;

      this.tambahRuangStatus(namaRuang, statusRuang);
    });

    const jadwal = await this.ruangRepository.query(
      `SELECT * FROM view_getbookingstatus WHERE id_lantai = '${id_lantai}' AND nama_hari = '${hari}'`,
    );

    jadwal.forEach((ruang: JamStatus) => {
      const namaRuang = ruang.nama_ruang;

      const jamData: JamStatus = {
        nama_ruang: ruang.nama_ruang,
        id_lantai: ruang.id_lantai,
        date: ruang.date,
        nama_hari: ruang.nama_hari,
        jam_mulai: ruang.jam_mulai,
        jam_selesai: ruang.jam_selesai,
        status_jam: ruang.status_jam,
      };
      const ruangData: RuangStatus = {
        status_ruang: this.ruangStatus[namaRuang].status_ruang,
        status_jam: [jamData],
      };

      this.tambahDataRuang(namaRuang, ruangData);
    });

    return this.ruangData;
  }
  async create(createRuangDto: CreateRuangDto) {
    return await this.ruangRepository.save(createRuangDto);
  }

  async findAll() {
    return await this.ruangRepository.find();
  }

  async findOne(id: string) {
    return await this.ruangRepository.findOne({ where: { idRuang: id } });
  }

  async update(id: string, updateRuangDto: UpdateRuangDto) {
    return `This action updates a #${id} ruang`;
  }

  async remove(id: string) {
    return `This action removes a #${id} ruang`;
  }
}
