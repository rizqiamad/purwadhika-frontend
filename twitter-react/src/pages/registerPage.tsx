import X from '../assets/logo.svg'
import Apple from "../assets/apple.png";
import Google from "../assets/google.png";
import Modal from '../components/modal';

export default function RegisterPage() {
  return (
    <div className='flex flex-col gap-12'>
      <div className="flex max-lg:flex-col">
        <div className="max-w-[40%] min-h-[100vh] max-lg:min-h-0 flex items-center justify-center mx-auto max-lg:justify-start max-lg:max-w-[50%]">
          <img src={X} alt="X" className="w-[50%] max-lg:w-[10%]" />
        </div>
        <div className="min-h-[100vh] pt-20 max-lg:pt-0 max-lg:w-[50%] mx-auto">
          <h1 className='text-7xl font-semibold text-white mb-12'>Sedang tren saat ini</h1>
          <p className='text-4xl text-white font-semibold mb-10'>Bergabunglah sekarang</p>
          <div className='w-[50%] flex flex-col gap-2'>
            <button className='h-10 rounded-3xl bg-white text-black font-semibold flex justify-center items-center gap-2'>
              <img src={Google} alt="Google" className='w-4' />
              Daftar dengan Google
            </button>
            <button className='h-10 rounded-3xl bg-white text-black font-semibold flex justify-center items-center gap-2'>
              <img src={Apple} alt="Google" className='w-4' />
              Daftar dengan Apple
            </button>
            <div className="divider text-white">atau</div>
            <Modal />
            <p className='text-[0.7rem] mb-12 text-white'>Dengan mendaftar, Anda menyetujui <span className='cursor-pointer text-[#1d9bf0]'>Persyaratan Layanan</span> dan <span className='cursor-pointer text-[#1d9bf0]'>Kebijakan Privasi</span>, termasuk <span className='cursor-pointer text-[#1d9bf0]'>Penggunaan Kuki</span>.</p>
            <p className='text-xl font-semibold text-white mb-2'>Sudah punya akun?</p>
            <button className='h-10 rounded-3xl border border-[#1d9bf0] text-white font-semibold'>Masuk</button>
          </div>
        </div>
      </div>
      <footer className='flex justify-center flex-wrap text-[0.8rem] gap-4 py-4'>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Tentang</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Unduh Aplikasi</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Pusat Bantuan</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Persyatan Layanan</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Kebijakan Privasi</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Kebijakan Penggunaan Kuki</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Aksesibilitas</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Informasi Iklan</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Blog</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Karier</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Sumber Daya Merek</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Periklanan</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Pemasaran</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>X untuk Bisnis</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Pengembang</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Direktori</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'>Pengaturan</p>
        <p className='cursor-pointer hover:text-[#1d9bf0]'><sup>&copy;</sup>{new Date().getFullYear()} X Corp</p>
      </footer>
    </div>
  )
}