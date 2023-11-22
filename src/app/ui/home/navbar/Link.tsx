import { createElement } from 'react';
import {
  HomeOutlined,
  SearchOutlined,
  GlobalOutlined,
  CommentOutlined,
  HeartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export default function Links({ icon, to}: { icon: string, to: string }) {
  
  const iconComponent = {
    HomeOutlined,
    SearchOutlined,
    GlobalOutlined,
    CommentOutlined,
    HeartOutlined,
    PlusOutlined,
  }[icon];

  if (!iconComponent) {
    alert(`Icono desconocido: ${icon}`);
    return null;
  }

  return (
    <Link href={`./${to}`}>
     <section className="cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-800 text">
      {createElement(iconComponent)}
    </section>
    </Link>
  );
}
