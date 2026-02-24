import { Product, Project, CoreValue } from './types';

export const CORE_VALUES: CoreValue[] = [
  { letter: 'S', title: 'Superior Strength', description: 'Kekuatan unggul menegaskan inti setiap produk yang dirancang untuk memberikan daya lindung maksimal di berbagai kondisi.' },
  { letter: 'H', title: 'High Performance', description: 'Performa Tinggi Memberikan kinerja yang stabil, konsisten, dan optimal pada setiap aplikasi.' },
  { letter: 'I', title: 'Innovation Mindset', description: 'Perusahaan yang selalu mendorong riset, pengembangan formulasi, serta pembaruan teknologi, modern, dan adaptif.' },
  { letter: 'E', title: 'Environment Responsibility', description: 'Tanggung Jawab komitmen pada formulasi yang lebih aman, ramah lingkungan, dan mendukung keberlanjutan.' },
  { letter: 'L', title: 'Loyal Customer', description: 'Memahami kebutuhan pelanggan secara mendalam dan menyediakan solusi coating yang tepat sehingga bernilai jangka panjang.' },
  { letter: 'D', title: 'Durable Performance', description: 'Performa tahan uji memastikan ketahanan material dalam jangka panjang sehingga mendukung efisiensi operasional pelanggan.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'tetsumastic',
    name: 'TETSUMASTIC',
    category: 'Protective & Marine',
    description: 'Epoxy mastic tahan korosi dan kelembapan tinggi.',
    features: ['Tahan korosi', 'Tahan lembap', 'Cocok untuk jembatan & pabrik'],
    image: 'tetsupaint1.png' // Page 9
  },
  {
    id: 'tetsuthane',
    name: 'TETSUTHANE',
    category: 'Protective & Marine',
    description: 'Cat Polyurethane 2 komponen dengan daya tahan tinggi terhadap UV.',
    features: ['Tahan UV', 'Tahan bahan kimia', 'Hasil akhir kuat & estetis'],
    image: 'tetsupaint2.png' // Page 9
  },
  {
    id: 'tetsuguard',
    name: 'TETSUGUARD',
    category: 'Protective & Marine',
    description: 'Cat primer epoxy high solid untuk performa dan durability yang baik.',
    features: ['High solid', 'Area marine & offshore'],
    image: 'tetsupaint3.png' // Page 9
  },
  {
    id: 'tetsukyd',
    name: 'TETSUKYD',
    category: 'Protective & Marine',
    description: 'Cat berbasis Alkyd Resin dengan harga yang ekonomis.',
    features: ['Berbasis Alkyd', 'Ekonomis', 'Kualitas baik'],
    image: 'tetsupaint1.png' // Page 9
  },
  {
    id: 'tetsulac',
    name: 'TETSULAC SERIES',
    category: 'General Industry',
    description: 'Cat oven untuk kebutuhan industri manufaktur yang serbaguna.',
    features: ['Cat oven', 'Serbaguna', 'Kualitas bagus'],
    image: 'tetsupaint2.png' // Page 10
  },
  {
    id: 'tetsucryl',
    name: 'TETSUCRYL',
    category: 'General Industry',
    description: 'Cat berbahan dasar acrylic yang cepat kering.',
    features: ['Cepat kering', 'Industri LPG', 'Alat rumah tangga'],
    image: 'tetsupaint3.png' // Page 10
  },
  {
    id: 'tetsumax',
    name: 'TETSUMAX',
    category: 'General Industry',
    description: 'Cat serbaguna untuk kebutuhan industri umum.',
    features: ['Serbaguna', 'Berbagai tipe aplikasi'],
    image: 'tetsupaint1.png' // Page 10
  },
  {
    id: 'tetsufloor',
    name: 'TETSUFLOOR',
    category: 'General Industry',
    description: 'Cat pelapis lantai dengan permukaan kuat, mulus, dan tahan lama.',
    features: ['Kuat & mulus', 'Tahan lama', 'Industri & komersial'],
    image: 'tetsupaint2.png' // Page 10
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Bandara Dhoho', location: 'Kediri', image: 'image-1.png' }, // Page 16
  { id: '2', title: 'RSUI Depok', location: 'Depok', image: 'image-2.png' }, // Page 17
  { id: '3', title: 'Gedung Sarinah', location: 'Jakarta', image: 'image-3.png' }, // Page 17
  { id: '4', title: 'Pabrik Cikarang', location: 'Cikarang', image: 'image-4.png' }, // Page 16
  { id: '5', title: 'Heliport White Sky', location: 'Tangerang', image: 'image-5.png' }, // Page 16
  { id: '6', title: 'Taman Budaya', location: 'Wonosari', image: 'image-6.png' }, // Page 16
];
